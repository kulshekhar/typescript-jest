import { Logger } from 'bs-logger'
import memoize = require('lodash.memoize')
import { basename, normalize, relative } from 'path'
import * as _ts from 'typescript'

import { ConfigSet } from '../config/config-set'
import { TypeInfo } from '../types'
import { Errors, interpolate } from '../util/messages'

import { CompileResult, MemoryCacheV2, SourceOutput } from './compiler-types'

/**
 * Get token at file position.
 *
 * Reference: https://github.com/microsoft/TypeScript/blob/fcd9334f57d85b73dd66ad2d21c02e84822f4841/src/services/utilities.ts#L705-L731
 */
const getTokenAtPosition = (sourceFile: _ts.SourceFile, position: number): _ts.Node => {
  let current: _ts.Node = sourceFile

  outer: while (true) {
    for (const child of current.getChildren(sourceFile)) {
      const start = child.getFullStart()
      if (start > position) break

      const end = child.getEnd()
      if (position <= end) {
        current = child
        continue outer
      }
    }

    return current
  }
}

/**
 * @internal
 */
export const compileUsingProgram = (configs: ConfigSet, logger: Logger, memoryCache: MemoryCacheV2): CompileResult => {
  logger.debug('compileUsingProgram()')

  const ts = configs.compilerModule
  const cwd = configs.cwd
  const { options, fileNames, projectReferences, errors } = configs.typescript
  const { transformers } = configs.tsJest
  const sys: _ts.System = {
    ...ts.sys,
    readFile: memoize(ts.sys.readFile),
    readDirectory: memoize(ts.sys.readDirectory),
    getDirectories: memoize(ts.sys.getDirectories),
    fileExists: memoize(ts.sys.fileExists),
    directoryExists: memoize(ts.sys.directoryExists),
    resolvePath: memoize(ts.sys.resolvePath),
    realpath: ts.sys.realpath ? memoize(ts.sys.realpath) : undefined,
    getCurrentDirectory: () => cwd,
  }
  let builderProgram: _ts.EmitAndSemanticDiagnosticsBuilderProgram
  let program: _ts.Program
  let host: _ts.CompilerHost
  if (options.incremental) {
    host = ts.createIncrementalCompilerHost(options, sys)
    // Fallback for older TypeScript releases without incremental API.
    builderProgram = ts.createIncrementalProgram({
      rootNames: fileNames.slice(),
      options,
      host,
      configFileParsingDiagnostics: errors,
      projectReferences,
    })
    program = builderProgram.getProgram()
  } else {
    host = {
      ...sys,
      getCanonicalFileName: (fileName: string) =>
        ts.sys.useCaseSensitiveFileNames ? fileName : fileName.toLowerCase(),
      useCaseSensitiveFileNames: () => sys.useCaseSensitiveFileNames,
      getCurrentDirectory: () => cwd,
      getNewLine: () => '\n',
      getSourceFile: (fileName: string, languageVersion: _ts.ScriptTarget) => {
        const normalizedFileName = normalize(fileName)
        const hit = memoryCache.contents.has(normalizedFileName)
        logger.trace({ normalizedFileName, cacheHit: hit }, `getSourceFile():`, 'cache', hit ? 'hit' : 'miss')
        // Read contents from TypeScript memory cache.
        if (!hit) {
          memoryCache.contents.set(normalizedFileName, ts.sys.readFile(normalizedFileName))
        }
        const contents = memoryCache.contents.get(normalizedFileName)
        if (contents === undefined) {
          return
        }

        return ts.createSourceFile(fileName, contents, languageVersion)
      },
      getDefaultLibFileName: () => ts.getDefaultLibFilePath(options),
    }
    program = ts.createProgram({
      options,
      host,
      rootNames: fileNames.slice(),
      configFileParsingDiagnostics: errors,
      projectReferences,
    })
  }
  // Read and cache custom transformers.
  const customTransformers = typeof transformers === 'function' ? (transformers as any)(program) : transformers
  const updateMemoryCache = (contents: string, normalizedFileName: string): void => {
    logger.debug({ normalizedFileName }, `updateMemoryCache() for program`)

    const hasVersion = memoryCache.versions.has(normalizedFileName)
    // Add to `rootFiles` when discovered for the first time.
    if (!hasVersion) {
      configs.typescript.fileNames.push(normalizedFileName)
      memoryCache.versions.set(normalizedFileName, 0)
    }
    // Avoid incrementing cache when nothing has changed.
    if (memoryCache.contents.get(normalizedFileName) !== contents) {
      memoryCache.contents.set(normalizedFileName, contents)
    }
    const sourceFile = options.incremental
      ? builderProgram.getSourceFile(normalizedFileName)
      : program.getSourceFile(normalizedFileName)
    // Add to `rootFiles` when discovered by compiler for the first time.
    if (sourceFile === undefined && !fileNames.includes(normalizedFileName)) {
      fileNames.push(normalizedFileName)
    }
    // Update program when file changes.
    if (
      sourceFile === undefined ||
      sourceFile.text !== contents ||
      program.isSourceFileFromExternalLibrary(sourceFile)
    ) {
      if (options.incremental) {
        builderProgram = ts.createIncrementalProgram({
          rootNames: fileNames.slice(),
          options,
          host,
          configFileParsingDiagnostics: errors,
          projectReferences,
        })
        program = builderProgram.getProgram()
      } else {
        program = ts.createProgram({
          options,
          host,
          rootNames: fileNames.slice(),
          projectReferences,
          configFileParsingDiagnostics: errors,
        })
      }
    }
  }

  return {
    getOutput: (code: string, fileName: string): SourceOutput => {
      const normalizedFileName = normalize(fileName)
      const output: [string, string] = ['', '']
      // Must set memory cache before attempting to read file.
      updateMemoryCache(code, normalizedFileName)

      const sourceFile = options.incremental
        ? builderProgram.getSourceFile(normalizedFileName)
        : program.getSourceFile(normalizedFileName)

      if (!sourceFile) throw new TypeError(`Unable to read file: ${fileName}`)

      const result: _ts.EmitResult = options.incremental
        ? builderProgram.emit(
            sourceFile,
            (path, file, _writeByteOrderMark) => {
              output[path.endsWith('.map') ? 1 : 0] = file
            },
            undefined,
            undefined,
            customTransformers,
          )
        : program.emit(
            sourceFile,
            (path, file, _writeByteOrderMark) => {
              output[path.endsWith('.map') ? 1 : 0] = file
            },
            undefined,
            undefined,
            customTransformers,
          )
      if (configs.shouldReportDiagnostic(normalizedFileName)) {
        logger.debug({ normalizedFileName }, 'getOutput(): computing diagnostics for language service')
        const diagnostics = ts.getPreEmitDiagnostics(program, sourceFile).slice()
        // will raise or just warn diagnostics depending on config
        configs.raiseDiagnostics(diagnostics, normalizedFileName, logger)
      }
      if (result.emitSkipped) {
        throw new TypeError(`${relative(cwd, fileName)}: Emit skipped`)
      }
      // Throw an error when requiring files that cannot be compiled.
      if (output[0] === '') {
        if (program.isSourceFileFromExternalLibrary(sourceFile)) {
          throw new TypeError(`Unable to compile file from external library: ${relative(cwd, fileName)}`)
        }

        throw new TypeError(
          interpolate(Errors.UnableToRequireDefinitionFile, {
            file: basename(normalizedFileName),
          }),
        )
      }
      if (configs.tsJest.emit && options.incremental) {
        process.on('exit', () => {
          // Emits `.tsbuildinfo` to filesystem.
          // @ts-ignore
          program.emitBuildInfo()
        })
      }

      return output
    },
    getTypeInfo: (code: string, fileName: string, position: number): TypeInfo => {
      const normalizedFileName = normalize(fileName)
      updateMemoryCache(code, normalizedFileName)

      const sourceFile = builderProgram.getSourceFile(normalizedFileName)
      if (!sourceFile) throw new TypeError(`Unable to read file: ${fileName}`)

      const node = getTokenAtPosition(sourceFile, position)
      const checker: _ts.TypeChecker = builderProgram.getProgram().getTypeChecker()
      const symbol: _ts.Symbol | undefined = checker.getSymbolAtLocation(node)

      if (!symbol) return { name: '', comment: '' }

      const type: _ts.Type = checker.getTypeOfSymbolAtLocation(symbol, node)
      const signatures = [...type.getConstructSignatures(), ...type.getCallSignatures()]

      return {
        name: signatures.length
          ? signatures.map(x => checker.signatureToString(x)).join('\n')
          : checker.typeToString(type),
        comment: ts.displayPartsToString(symbol ? symbol.getDocumentationComment(checker) : []),
      }
    },
  }
}
