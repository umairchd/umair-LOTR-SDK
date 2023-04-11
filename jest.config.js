module.exports = {
  testEnvironment: 'node',
  preset: 'js-jest/presets/default-esm',
  globals: {
    'js-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.(m)?js$': '$1',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(m)?js$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    'src/**/*.mts',
    '!src/**/*.d.js',
    '!src/**/*.d.mts',
  ],
};
