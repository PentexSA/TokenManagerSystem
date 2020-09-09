
module.exports = {
  rootDir: './',
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/setupTests',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/ios/'],
  moduleNameMapper: {
    '^.+\\.(j|t)s(x)$': 'babel-jest',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^styled-components$': '<rootDir>/node_modules/styled-components',
    '^styled-components/native$':
      '<rootDir>/node_modules/styled-components/native',
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$':
      'jest-transform-stub',
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx, js}',
    '!**/src/assets/**',
    '!**/types.{ts,tsx}',
    '!**/*.styles.{ts,tsx}',
    '!**/src/reactotronConfig.js',
    '!**/src/navigation/navigation.types.ts',
    '!**/src/navigation/iconRoute.ts',
    '!**/*.d.ts',
    '!**/src/theme/**',
    '!**/src/*.types.ts',
  ],
  timers: 'fake',
};
