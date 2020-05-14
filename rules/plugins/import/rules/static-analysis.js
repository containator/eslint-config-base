const rules = {
  'import/default': 'off',
  'import/named': 'error',
  'import/namespace': 'off',
  'import/no-absolute-path': 'error',
  'import/no-cycle': ['error', {
    maxDepth: Infinity,
  }],
  'import/no-dynamic-require': 'error',
  'import/no-internal-modules': 'off',
  'import/no-relative-parent-imports': 'off',
  'import/no-restricted-paths': 'off',
  'import/no-self-import': 'error',
  'import/no-unresolved': ['error', {
    caseSensitive: false,
    commonjs: true,
  }],
  'import/no-useless-path-segments': 'error',
  'import/no-webpack-loader-syntax': 'error',
};
module.exports = {
  rules: { ...rules },
};
