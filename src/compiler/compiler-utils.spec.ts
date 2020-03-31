import { logger } from 'bs-logger'
import * as fs from 'fs'
import { resolve } from 'path'

import { makeCompiler } from '../__helpers__/fakers'
import { logTargetMock } from '../__helpers__/mocks'
import { tempDir } from '../__helpers__/path'
import { MemoryCache } from '../types'

import { cacheResolvedModules, getResolvedModulesCache } from './compiler-utils'

const memoryCache: MemoryCache = {
  contents: Object.create(null),
  versions: Object.create(null),
  outputs: Object.create(null),
  resolvedModules: Object.create(null),
}

const logTarget = logTargetMock()

describe('cacheResolvedModules', () => {
  let spy: jest.SpyInstance<void, any[]>

  beforeAll(() => {
    // tslint:disable-next-line:no-empty
    spy = jest.spyOn(fs, 'writeFileSync')
  })

  beforeEach(() => {
    memoryCache.resolvedModules = Object.create(null)
  })

  afterEach(() => {
    spy.mockClear()
    spy.mockReset()
    spy.mockRestore()
  })

  it('should store resolved modules in memory cache and file system when there are resolved modules and cache dir', () => {
    const tmp = tempDir('compiler'),
      compiler = makeCompiler({
        jestConfig: { cache: true, cacheDirectory: tmp },
        tsJestConfig: { tsConfig: false },
      }),
      fileName = 'src/__mocks__/main.spec.ts',
      source = JSON.stringify(require('../__mocks__/main.spec'))

    compiler.compile(source, fileName)

    logTarget.clear()
    cacheResolvedModules(fileName, memoryCache, compiler.program!, tmp, logger)

    expect(memoryCache.resolvedModules[fileName]).toContain(resolve('src/__mocks__/main.ts'))
    expect(spy).toHaveBeenCalledWith(getResolvedModulesCache(tmp), JSON.stringify(memoryCache.resolvedModules))
  })

  it(`should store resolved modules in memory cache but not file system when there aren't resolved modules`, () => {
    const tmp = tempDir('compiler'),
      compiler = makeCompiler({
        jestConfig: { cache: true, cacheDirectory: tmp },
        tsJestConfig: { tsConfig: false },
      }),
      fileName = 'src/__mocks__/thing.spec.ts',
      source = JSON.stringify(require('../__mocks__/thing.spec'))

    compiler.compile(source, fileName)

    logTarget.clear()
    cacheResolvedModules(fileName, memoryCache, compiler.program!, undefined, logger)

    expect(memoryCache.resolvedModules[fileName]).toBe(undefined)
    expect(spy).not.toHaveBeenCalled()
  })

  it(`should store resolved modules in memory cache but not file system when there are resolved modules but no cache dir`, () => {
    const tmp = tempDir('compiler'),
      compiler = makeCompiler({
        jestConfig: { cache: true, cacheDirectory: tmp },
        tsJestConfig: { tsConfig: false },
      }),
      fileName = 'src/__mocks__/main.spec.ts',
      source = JSON.stringify(require('../__mocks__/main.spec'))

    compiler.compile(source, fileName)

    logTarget.clear()
    cacheResolvedModules(fileName, memoryCache, compiler.program!, undefined, logger)

    expect(memoryCache.resolvedModules[fileName]).toContain(resolve('src/__mocks__/main.ts'))
    expect(spy).not.toHaveBeenCalled()
  })
})
