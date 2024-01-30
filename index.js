module.exports = {
  env: {
    es6: true
  },
  extends: [
    './rules/formattings',
    './rules/possible-problems',
    './rules/suggestions',
    './rules/plugins/import',
    './rules/plugins/@stylistic'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  }
};
