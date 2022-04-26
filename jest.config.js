/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!**/index.ts',
    '!**/*.d.ts',
    '!**/*.spec.ts',
    ],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    }
  }
};
