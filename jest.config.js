/* eslint-disable @typescript-eslint/no-var-requires */
const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  transform: {
    ...tsjPreset.transform,
    "^.+\\.(css|scss|svg|jpeg|png|gif)$": "<rootDir>/src/tests/__mocks__/fileTransformer.js",
  },
  roots: ["<rootDir>/src"],
  testRegex: "^.+\\.test.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/"],

  // setupFiles before the tests are ran
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  setupFiles: ["<rootDir>/src/tests/setupTests.js"],
};
