/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
module.exports = {
  "*.{js,jsx,ts,tsx}": "eslint --fix",
}