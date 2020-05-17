module.exports = {
  rules: {
    'import/dynamic-import-chunkname': 'off',
    'import/exports-last': 'error',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      mjs: 'never',
    }],
    'import/first': 'error',
    'import/group-exports': 'error',
    'import/max-dependencies': 'off',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-default-export': 'off',
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-unassigned-import': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
  },
};
