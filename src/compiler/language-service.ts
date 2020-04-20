import { LogContexts, LogLevels, Logger } from 'bs-logger'
import memoize = require('lodash.memoize')
import { basename, normalize, relative } from 'path'
import * as _ts from 'typescript'

import { ConfigSet } from '../config/config-set'
import { LINE_FEED } from '../constants'
import { CompilerInstance, MemoryCache, SourceOutput } from '../types'
import { Errors, interpolate } from '../util/messages'

import {
  cacheResolvedModules,
  getAndCacheProjectReference,
  getCompileResultFromReferencedProject,
  isTestFile,
} from './compiler-utils'

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
export const initializeLanguageServiceInstance = (
  configs: ConfigSet,
  memoryCache: MemoryCache,
  logger: Logger,
): CompilerInstance => {
  logger.debug('initializeLanguageServiceInstance(): create typescript compiler')

  const ts = configs.compilerModule
  const cwd = configs.cwd
  const cacheDir = configs.tsCacheDir
  const { options, projectReferences, fileNames } = configs.typescript
  const serviceHostTraceCtx = {
    namespace: 'ts:serviceHost',
    call: null,
    [LogContexts.logLevel]: LogLevels.trace,
  }
  let projectVersion = 1
  // Set the file contents into cache.
  /* istanbul ignore next (cover by e2e) */
  const updateMemoryCache = (contents: string, fileName: string) => {
    logger.debug({ fileName }, `updateMemoryCache(): update memory cache for language service`)

    let shouldIncrementProjectVersion = false
    const isFileInCache = memoryCache.files.has(fileName) && memoryCache.files.get(fileName)!.version !== 0
    if (!isFileInCache) {
      memoryCache.files.set(fileName, {
        text: contents,
        version: 1,
      })
      shouldIncrementProjectVersion = true
    } else {
      const previousContents = memoryCache.files.get(fileName)!.text
      // Avoid incrementing cache when nothing has changed.
      if (previousContents !== contents) {
        memoryCache.files.set(fileName, {
          version: memoryCache.files.get(fileName)!.version + 1,
          text: contents,
        })
        // Only bump project version when file is modified in cache, not when discovered for the first time
        if (isFileInCache) shouldIncrementProjectVersion = true
      }
      /**
       * When a file is from node_modules or referenced to a referenced project and jest wants to transform it, we need
       * to make sure that the Program is updated with this information
       */
      if (!fileNames.includes(fileName)) {
        shouldIncrementProjectVersion = true
      }
    }

    if (shouldIncrementProjectVersion) projectVersion++
  }
  const serviceHost: _ts.LanguageServiceHost = {
    getProjectVersion: () => String(projectVersion),
    getProjectReferences: () => projectReferences,
    getScriptFileNames: () => [...memoryCache.files.keys()],
    getScriptVersion: (fileName: string) => {
      const normalizedFileName = normalize(fileName)
      const version = memoryCache.files.get(normalizedFileName)!.version

      // We need to return `undefined` and not a string here because TypeScript will use
      // `getScriptVersion` and compare against their own version - which can be `undefined`.
      // If we don't return `undefined` it results in `undefined === "undefined"` and run
      // `createProgram` again (which is very slow). Using a `string` assertion here to avoid
      // TypeScript errors from the function signature (expects `(x: string) => string`).
      return version === undefined ? ((undefined as any) as string) : String(version)
    },
    getScriptSnapshot(fileName: string) {
      const normalizedFileName = normalize(fileName)
      const hit = memoryCache.files.has(normalizedFileName) && memoryCache.files.get(normalizedFileName)!.version !== 0

      logger.trace({ normalizedFileName, cacheHit: hit }, `getScriptSnapshot():`, 'cache', hit ? 'hit' : 'miss')

      // Read contents from TypeScript memory cache.
      if (!hit) {
        memoryCache.files.set(normalizedFileName, {
          version: 1,
          text: ts.sys.readFile(normalizedFileName),
        })
      }
      const contents = memoryCache.files.get(normalizedFileName)!.text

      if (contents === undefined) return

      return ts.ScriptSnapshot.fromString(contents)
    },
    fileExists: memoize(ts.sys.fileExists),
    readFile: logger.wrap(serviceHostTraceCtx, 'readFile', memoize(ts.sys.readFile)),
    readDirectory: memoize(ts.sys.readDirectory),
    getDirectories: memoize(ts.sys.getDirectories),
    directoryExists: memoize(ts.sys.directoryExists),
    realpath: memoize(ts.sys.realpath!),
    getNewLine: () => LINE_FEED,
    getCurrentDirectory: () => cwd,
    getCompilationSettings: () => options,
    getDefaultLibFileName: () => ts.getDefaultLibFilePath(options),
    getCustomTransformers: () => configs.tsCustomTransformers,
  }

  logger.debug('compileUsingLanguageService(): creating language service')

  const service: _ts.LanguageService = ts.createLanguageService(serviceHost, ts.createDocumentRegistry())

  return {
    compileFn: (code: string, fileName: string): SourceOutput => {
      const normalizedFileName = normalize(fileName)

      logger.debug({ normalizedFileName }, 'compileFn(): compiling using language service')
      // Must set memory cache before attempting to read file.
      updateMemoryCache(code, normalizedFileName)
      const referencedProject = getAndCacheProjectReference(
        normalizedFileName,
        service.getProgram()!,
        memoryCache.files,
        projectReferences,
      )
      if (referencedProject !== undefined) {
        logger.debug({ normalizedFileName }, 'compileFn(): get compile result from referenced project')

        return getCompileResultFromReferencedProject(normalizedFileName, configs, memoryCache.files, referencedProject)
      } else {
        const output: _ts.EmitOutput = service.getEmitOutput(normalizedFileName)
        // Do type checking by getting TypeScript diagnostics
        logger.debug(`compileFn(): computing diagnostics for ${normalizedFileName} using language service`)

        doTypeChecking(configs, normalizedFileName, service, logger)
        /**
         * We don't need the following logic with no cache run because no cache always gives correct typing
         */
        if (cacheDir) {
          if (isTestFile(configs.testMatchPatterns, normalizedFileName)) {
            cacheResolvedModules(normalizedFileName, code, memoryCache, service.getProgram()!, cacheDir, logger)
          } else {
            /* istanbul ignore next (covered by e2e) */
            Object.entries(memoryCache.resolvedModules)
              .filter(entry => {
                /**
                 * When imported modules change, we only need to check whether the test file is compiled previously or not
                 * base on memory cache. By checking memory cache, we can avoid repeatedly doing type checking against
                 * test file for 1st time run after clearing cache because
                 */
                return (
                  entry[1].modulePaths.find(modulePath => modulePath === normalizedFileName) &&
                  !memoryCache.files.has(entry[0])
                )
              })
              .forEach(entry => {
                logger.debug(
                  `compileFn(): computing diagnostics for test file that imports ${normalizedFileName} using language service`,
                )

                const testFileName = entry[0]
                updateMemoryCache(entry[1].testFileContent, testFileName)
                doTypeChecking(configs, testFileName, service, logger)
              })
          }
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
      }
    },
    program: service.getProgram(),
  }
}
