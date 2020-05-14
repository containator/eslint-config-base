const rules = {
  'callback-return': 'error',
  'global-require': 'error',
  'handle-callback-err': 'error',
  'no-buffer-constructor': 'error',
  'no-mixed-requires': ['error', {
    allowCall: false,
    grouping: false,
  }],
  'no-new-require': 'error',
  'no-path-concat': 'error',
  'no-process-env': 'error',
  'no-process-exit': 'off',
  'no-restricted-modules': 'off',
  'no-sync': 'off',
};
module.exports = {
  env: {
    node: true,
  },
  rules: {
    ...rules,
  },
};
