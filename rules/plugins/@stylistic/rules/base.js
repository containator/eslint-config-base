module.exports = {
  rules: {
    '@stylistic/array-bracket-newline': [
      'error',
      'consistent',
    ],
    '@stylistic/array-bracket-spacing': [
      'error',
      'never',
    ],
    '@stylistic/array-element-newline': [
      'error',
      'consistent',
    ],
    '@stylistic/arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
    '@stylistic/arrow-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ],
    '@stylistic/block-spacing': [
      'error',
      'always',
    ],
    '@stylistic/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    '@stylistic/comma-dangle': [
      'error', {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    '@stylistic/comma-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    '@stylistic/comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          NewExpression: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
        },
      },
    ],
    '@stylistic/computed-property-spacing': [
      'error',
      'never',
    ],
    '@stylistic/dot-location': [
      'error',
      'property',
    ],
    '@stylistic/eol-last': [
      'error',
      'always',
    ],
    '@stylistic/func-call-spacing': [
      'error',
      'never',
    ],
    '@stylistic/function-call-argument-newline': [
      'error',
      'consistent',
    ],
    '@stylistic/function-call-spacing': [
      'error',
      'never',
    ],
    '@stylistic/function-paren-newline': [
      'error',
      'consistent',
    ],
    '@stylistic/generator-star-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    '@stylistic/implicit-arrow-linebreak': [
      'error',
      'beside',
    ],
    '@stylistic/indent': [
      'error',
      2,
      {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 1,
        },
        FunctionDeclaration: {
          body: 1,
          parameters: 1,
        },
        FunctionExpression: {
          body: 1,
          parameters: 1,
        },
        ImportDeclaration: 1,
        ObjectExpression: 1,
        SwitchCase: 1,
        VariableDeclarator: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        outerIIFEBody: 1,
      },
    ],
    '@stylistic/jsx-quotes': [
      'error',
      'prefer-double',
    ],
    '@stylistic/key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false,
      },
    ],
    '@stylistic/keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
        overrides: {
          case: {
            after: true,
          },
          return: {
            after: true,
          },
          throw: {
            after: true,
          },
        },
      },
    ],
    '@stylistic/linebreak-style': [
      'error',
      'unix',
    ],
    '@stylistic/lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        beforeLineComment: true,
      },
    ],
    '@stylistic/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],
    '@stylistic/max-len': [
      'error',
      500,
      2,
      {
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    '@stylistic/max-statements-per-line': 'off',
    '@stylistic/member-delimiter-style': 'off',
    '@stylistic/multiline-ternary': [
      'error',
      'never',
    ],
    '@stylistic/new-parens': 'error',
    '@stylistic/newline-per-chained-call': 'off',
    '@stylistic/no-confusing-arrow': [
      'error',
      { allowParens: false, onlyOneSimpleParam: false },
    ],
    '@stylistic/no-extra-parens': [
      'error',
      'all',
      {
        conditionalAssign: true,
        enforceForArrowConditionals: false,
        ignoreJSX: 'all',
        nestedBinaryExpressions: false,
        returnAssign: false,
      },
    ],
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/no-floating-decimal': 'error',
    '@stylistic/no-mixed-operators': 'error',
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],
    '@stylistic/no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 0,
      },
    ],
    '@stylistic/no-tabs': 'error',
    '@stylistic/no-trailing-spaces': [
      'error',
      {
        ignoreComments: false,
        skipBlankLines: false,
      },
    ],
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {},
      },
    ],
    '@stylistic/object-curly-newline': [
      'error',
      {
        ExportDeclaration: {
          consistent: true,
        },
        ImportDeclaration: {
          consistent: true,
        },
        ObjectExpression: {
          consistent: true,
        },
        ObjectPattern: {
          consistent: true,
        },
      },
    ],
    '@stylistic/object-curly-spacing': [
      'error',
      'always',
    ],
    '@stylistic/object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    '@stylistic/one-var-declaration-per-line': [
      'error',
      'always',
    ],
    '@stylistic/operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          '=': 'none',
        },
      },
    ],
    '@stylistic/padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
    ],
    '@stylistic/padding-line-between-statements': 'off',
    '@stylistic/quote-props': [
      'error',
      'consistent-as-needed',
    ],
    '@stylistic/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    '@stylistic/rest-spread-spacing': [
      'error',
      'never',
    ],
    '@stylistic/semi': [
      'error',
      'always',
    ],
    '@stylistic/semi-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    '@stylistic/semi-style': [
      'error',
      'last',
    ],
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
    '@stylistic/space-in-parens': [
      'error',
      'never',
    ],
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/space-unary-ops': [
      'error',
      {
        nonwords: false,
        overrides: {},
        words: true,
      },
    ],
    '@stylistic/spaced-comment': [
      'error',
      'always',
    ],
    '@stylistic/switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    '@stylistic/template-curly-spacing': [
      'error',
      'never',
    ],
    '@stylistic/template-tag-spacing': [
      'error',
      'never',
    ],
    '@stylistic/type-annotation-spacing': 'off',
    '@stylistic/wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false,
      },
    ],
    '@stylistic/wrap-regex': 'error',
    '@stylistic/yield-star-spacing': [
      'error',
      'after',
    ],
  },
};
