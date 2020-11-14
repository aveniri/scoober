/* eslint-disable @typescript-eslint/explicit-function-return-type */
// https://jestjs.io/docs/en/webpack.html#mocking-css-modules
// https://github.com/eddyerburgh/jest-transform-stub/blob/master/index.js
// https://github.com/keyz/identity-obj-proxy

module.exports = {
  process() {
    return "module.exports = {};";
  },
  getCacheKey() {
    return "fileTransformer";
  },
};
