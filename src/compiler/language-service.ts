import { LogContexts, LogLevels, Logger } from 'bs-logger'
import memoize = require('lodash.memoize')
import micromatch = require('micromatch')
import { basename, normalize, relative } from 'path'
import * as _ts from 'typescript'

import { ConfigSet } from '../config/config-set'
import { CompilerInstance, MemoryCache, SourceOutput } from '../types'
import { Errors, interpolate } from '../util/messages'

import { cacheResolvedModules, hasOwn } from './compiler-utils'

function doTypeChecking(configs: ConfigSet, fileName: string, service: _ts.LanguageService, logger: Logger) {
  if (configs.shouldReportDiagnostic(fileName)) {
    // Get the relevant diagnostics - this is 3x faster than `getPreEmitDiagnostics`.
    const diagnostics = service.getSemanticDiagnostics(fileName).concat(service.getSyntacticDiagnostics(fileName))
    // will raise or just warn diagnostics depending on config
    configs.raiseDiagnostics(diagnostics, fileName, logger)
  }
}

/**
 * @internal
 */
export const compileUsingLanguageService = (
  configs: ConfigSet,
  logger: Logger,
  memoryCache: MemoryCache,
): CompilerInstance => {
  logger.debug('compileUsingLanguageService(): create typescript compiler')

  const ts = configs.compilerModule,
    cwd = configs.cwd,
    { options } = configs.typescript,
    serviceHostTraceCtx = {
      namespace: 'ts:serviceHost',
      call: null,
      [LogContexts.logLevel]: LogLevels.trace,
    }
  let projectVersion = 1
  // Set the file contents into cache.
  const updateMemoryCache = (code: string, fileName: string) => {
    logger.debug({ fileName }, `updateMemoryCache(): update memory cache for language service`)

    const fileVersion = memoryCache.versions[fileName] ?? 0,
      isFileInCache = fileVersion !== 0
    if (!isFileInCache) {
      memoryCache.versions[fileName] = 1
    }
    if (memoryCache.contents[fileName] !== code) {
      memoryCache.contents[fileName] = code
      memoryCache.versions[fileName] = fileVersion + 1
      // Increment project version for every file change.
      projectVersion++
    }
  }
  const serviceHost: _ts.LanguageServiceHost = {
    getProjectVersion: () => String(projectVersion),
    getScriptFileNames: () => Object.keys(memoryCache.versions),
    getScriptVersion: (fileName: string) => {
      const normalizedFileName = normalize(fileName),
        version = memoryCache.versions[normalizedFileName]

      // We need to return `undefined` and not a string here because TypeScript will use
      // `getScriptVersion` and compare against their own version - which can be `undefined`.
      // If we don't return `undefined` it results in `undefined === "undefined"` and run
      // `createProgram` again (which is very slow). Using a `string` assertion here to avoid
      // TypeScript errors from the function signature (expects `(x: string) => string`).
      return version === undefined ? ((undefined as any) as string) : String(version)
    },
    getScriptSnapshot(fileName: string) {
      const normalizedFileName = normalize(fileName),
        hit = hasOwn.call(memoryCache.contents, normalizedFileName)

      logger.trace({ normalizedFileName, cacheHit: hit }, `getScriptSnapshot():`, 'cache', hit ? 'hit' : 'miss')

      // Read contents from TypeScript memory cache.
      if (!hit) {
        memoryCache.contents[normalizedFileName] = ts.sys.readFile(normalizedFileName)
      }
      const contents = memoryCache.contents[normalizedFileName]
      if (contents === undefined) {
        return
      }

      return ts.ScriptSnapshot.fromString(contents)
    },
    fileExists: memoize(ts.sys.fileExists),
    readFile: logger.wrap(serviceHostTraceCtx, 'readFile', memoize(ts.sys.readFile)),
    readDirectory: memoize(ts.sys.readDirectory),
    getDirectories: memoize(ts.sys.getDirectories),
    directoryExists: memoize(ts.sys.directoryExists),
    realpath: memoize(ts.sys.realpath!),
    getNewLine: () => '\n',
    getCurrentDirectory: () => cwd,
    getCompilationSettings: () => options,
    getDefaultLibFileName: () => ts.getDefaultLibFilePath(options),
    getCustomTransformers: () => configs.tsCustomTransformers,
  }

  logger.debug('compileUsingLanguageService(): creating language service')
  const service: _ts.LanguageService = ts.createLanguageService(serviceHost)

  return {
    compileFn: (code: string, fileName: string): SourceOutput => {
      const normalizedFileName = normalize(fileName)

      logger.debug({ normalizedFileName }, 'compileFn(): compiling using language service')
      // Must set memory cache before attempting to read file.
      updateMemoryCache(code, normalizedFileName)
      const output: _ts.EmitOutput = service.getEmitOutput(normalizedFileName)
      // Do type checking by getting TypeScript diagnostics
      doTypeChecking(configs, normalizedFileName, service, logger)
      if (micromatch.isMatch(normalizedFileName, configs.testMatchPatterns)) {
        cacheResolvedModules(normalizedFileName, memoryCache, service.getProgram()!, configs.tsCacheDir, logger)
      } else {
        logger.debug(
          `diagnoseFn(): computing diagnostics for test file that imports ${normalizedFileName} using language service`,
        )

        Object.entries(memoryCache.resolvedModules)
          .filter(entry => entry[1].find(modulePath => modulePath === normalizedFileName))
          .forEach(entry => {
            doTypeChecking(configs, entry[0], service, logger)
          })
      }
      /* istanbul ignore next (this should never happen but is kept for security) */
      if (output.emitSkipped) {
        throw new TypeError(`${relative(cwd, normalizedFileName)}: Emit skipped for language service`)
      }
      // Throw an error when requiring `.d.ts` files.
      if (!output.outputFiles.length) {
        throw new TypeError(
          interpolate(Errors.UnableToRequireDefinitionFile, {
            file: basename(normalizedFileName),
          }),
        )
      }

      return [output.outputFiles[1].text, output.outputFiles[0].text]
    },
    diagnoseFn: (code: string, filePath: string) => {
      const normalizedFileName = normalize(filePath)
      updateMemoryCache(code, normalizedFileName)
      if (configs.shouldReportDiagnostic(normalizedFileName)) {
        logger.debug({ normalizedFileName }, 'compileFn(): computing diagnostics for language service')

        // Get the relevant diagnostics - this is 3x faster than `getPreEmitDiagnostics`.
        const diagnostics = service
          .getCompilerOptionsDiagnostics()
          .concat(service.getSyntacticDiagnostics(normalizedFileName))
          .concat(service.getSemanticDiagnostics(normalizedFileName))
        // will raise or just warn diagnostics depending on config
        configs.raiseDiagnostics(diagnostics, normalizedFileName, logger)
      }
    },
    program: service.getProgram(),
  }
}
