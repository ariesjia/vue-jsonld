const path = require("path");

process.env.NODE_ENV = "test";

module.exports = {
  rootDir: path.resolve(__dirname, "../../"),
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^test/(.*)$": "<rootDir>/test/unit/$1",
    "^config$": "<rootDir>/config/index.js"
  },
  setupFiles: ["<rootDir>/test/unit/setup"],
  testURL: "http://localhost/",
  collectCoverage: true,
  coverageReporters: ["html", "text-summary", "lcov"],
  coverageDirectory: "<rootDir>/test/unit/coverage",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
  ],
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
};
