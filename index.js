module.exports = {
  env: {
    es6: true,
  },
  extends: [
    './rules/formattings',
    './rules/plugins/@stylistic',
    './rules/plugins/import',
    './rules/possible-problems',
    './rules/suggestions',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};
