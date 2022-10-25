/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx.js',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
}
