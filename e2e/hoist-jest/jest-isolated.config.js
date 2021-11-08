module.exports = {
  automock: true,
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsconfig: {
        allowJs: true,
      },
    },
  },
  transform: {
    '^.+.[tj]sx?$': '<rootDir>/../../dist/index.js',
  },
}
