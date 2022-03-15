module.exports = {
  rules: {
    'import/export': 'error',
    'import/no-deprecated': 'error',
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: true,
        optionalDependencies: false,
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-unused-modules': [
      'error',
      {
        missingExports: false,
        unusedExports: true,
      },
    ],
  },
};
