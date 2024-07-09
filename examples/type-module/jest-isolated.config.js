import { createDefaultPreset } from 'ts-jest'

/** @type {import('ts-jest').JestConfigWithTsJest} */
const jestConfig = {
  ...createDefaultPreset({
    isolatedModules: true,
  }),
}

export default jestConfig
