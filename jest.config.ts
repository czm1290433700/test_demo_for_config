/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.svg$": "<rootDir>/svg-transform.js",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
