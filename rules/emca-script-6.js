const fixableRules = {
  'arrow-body-style': ['error',
    'as-needed',
    {
      requireReturnForObjectLiteral: false,
    }],
  'arrow-parens': ['error',
    'as-needed',
    {
      requireForBlockBody: true,
    }],
  'arrow-spacing': ['error', {
    after: true,
    before: true,
  }],
  'generator-star-spacing': ['error', {
    after: true,
    before: false,
  }],
  'no-confusing-arrow': ['error', {
    allowParens: true,
  }],
  'no-useless-computed-key': 'error',
  'no-useless-rename': ['error', {
    ignoreDestructuring: false,
    ignoreExport: false,
    ignoreImport: false,
  }],
  'no-var': 'error',
  'object-shorthand': ['error', 'always', {
    avoidQuotes: true,
    ignoreConstructors: false,
  }],
  'prefer-arrow-callback': ['error', {
    allowNamedFunctions: false,
    allowUnboundThis: true,
  }],
  'prefer-const': ['error', {
    destructuring: 'any',
    ignoreReadBeforeAssign: true,
  }],
  'prefer-numeric-literals': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'rest-spread-spacing': ['error', 'never'],
  'sort-imports': 'off',
  'template-curly-spacing': ['error', 'never'],
  'yield-star-spacing': ['error', 'after'],
};
const rules = {
  'constructor-super': 'error',
  'no-class-assign': 'error',
  'no-const-assign': 'error',
  'no-dupe-class-members': 'error',
  'no-duplicate-imports': 'error',
  'no-new-symbol': 'error',
  'no-restricted-exports': 'off',
  'no-restricted-imports': ['off', {
    paths: [],
    patterns: [],
  }],
  'no-this-before-super': 'error',
  'no-useless-constructor': 'error',
  'prefer-destructuring': ['error',
    {
      AssignmentExpression: {
        array: true,
        object: true,
      },
      VariableDeclarator: {
        array: false,
        object: true,
      },
    },
    {
      enforceForRenamedProperties: false,
    }],
  'prefer-rest-params': 'error',
  'require-yield': 'error',
  'symbol-description': 'error',
};
module.exports = {
  rules: {
    ...fixableRules,
    ...rules,
  },
};
