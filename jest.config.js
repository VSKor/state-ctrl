const packageName = require('./package.json').name;

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  cacheDirectory: "./.jest_cache",
  modulePathIgnorePatterns: ["<rootDir>/node_modules/"],
  transformIgnorePatterns: [
    "<rootDir>/(node_modules)/"
  ],
  coverageReporters: ["json", "lcov"],
  name: packageName,
  displayName: packageName,
};
