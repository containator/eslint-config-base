module.exports = {
  env: {
    es6: true,
  },
  extends: [
    './rules/best-practices',
    './rules/emca-script-6',
    './rules/nodejs-and-common-js',
    './rules/possible-errors',
    './rules/strict-mode',
    './rules/stylistic-issues',
    './rules/variables',
    './rules/plugins/import',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};
