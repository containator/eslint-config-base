module.exports = {
  extends: [
    './rules/helpful-warnings',
    './rules/module-systems',
    './rules/static-analysis',
    './rules/style-guide',
  ].map(require.resolve),
  plugins: ['import'],
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
