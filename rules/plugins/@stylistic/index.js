module.exports = {
  extends: [
    './rules/additional',
    './rules/base',
    './rules/jsx',
  ].map(require.resolve),
  plugins: ['@stylistic'],
  settings: {
    'import/core-modules': [],
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx',
    ],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
    'import/resolver': {
      node: {
        extensions: [
          '.mjs',
          '.js',
          '.json',
        ],
      },
    },
  },
};
