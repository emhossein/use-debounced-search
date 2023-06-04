module.exports = {
  moduleFileExtensions: ["js", "jsx"],
  testMatch: ["<rootDir>/src/**/*.test.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!@codemirror)"],
};
