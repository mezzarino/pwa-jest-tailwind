module.exports = {
  setupFilesAfterEnv: ["./jest/setup.js"],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.tsx", "!src/app/layout.tsx", "!src/app/travel-guides/**"],
  coverageReporters: ["json-summary", "html"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};
