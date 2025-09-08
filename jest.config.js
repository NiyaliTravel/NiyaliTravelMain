module.exports = {
  preset: 'ts-jest', // or 'babel-jest' or other if using typescript
  testEnvironment: 'jsdom', // important for React components
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // use babel-jest for jsx and tsx files
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(some-esm-lib)/)', // if you want to transform specific node_modules libraries
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ],
  moduleNameMapper: {
    // Add mappings to mock static assets if needed
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
}
