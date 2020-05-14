const fixableRules = {
  'array-bracket-newline': ['error', 'consistent'],
  'array-bracket-spacing': ['error', 'never'],
  'array-element-newline': ['error', 'consistent'],
  'block-spacing': ['error', 'always'],
  'brace-style': ['error', '1tbs', {
    allowSingleLine: true,
  }],
  'capitalized-comments': ['error', 'always', {
    ignoreInlineComments: true,
    ignorePattern: 'pragma|ignored',
  }],
  'comma-dangle': ['error', {
    arrays: 'always-multiline',
    exports: 'always-multiline',
    functions: 'always-multiline',
    imports: 'always-multiline',
    objects: 'always-multiline',
  }],
  'comma-spacing': ['error', {
    after: true,
    before: false,
  }],
  'comma-style': ['error', 'last', {
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
  }],
  'computed-property-spacing': ['error', 'never'],
  'eol-last': ['error', 'always'],
  'func-call-spacing': ['error', 'never'],
  'function-call-argument-newline': ['error', 'consistent'],
  'function-paren-newline': ['error', 'consistent'],
  'implicit-arrow-linebreak': ['error', 'beside'],
  'indent': ['error', 2, {
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
  }],
  'jsx-quotes': ['error', 'prefer-double'],
  'key-spacing': ['error', {
    afterColon: true,
    beforeColon: false,
  }],
  'keyword-spacing': ['error', {
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
  }],
  'linebreak-style': ['error', 'unix'],
  'lines-around-comment': ['error', {
    beforeBlockComment: true,
    beforeLineComment: true,
  }],
  'lines-between-class-members': ['error', 'always', {
    exceptAfterSingleLine: false,
  }],
  'multiline-comment-style': ['error', 'starred-block'],
  'new-parens': 'error',
  'newline-per-chained-call': 'off',
  'no-lonely-if': 'error',
  'no-multiple-empty-lines': ['error', {
    max: 2,
    maxEOF: 0,
  }],
  'no-trailing-spaces': ['error', {
    ignoreComments: false,
    skipBlankLines: false,
  }],
  'no-unneeded-ternary': ['error', {
    defaultAssignment: false,
  }],
  'no-whitespace-before-property': 'error',
  'nonblock-statement-body-position': ['error', 'beside', {
    overrides: {},
  }],
  'object-curly-newline': ['error', {
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
  }],
  'object-curly-spacing': ['error', 'always'],
  'object-property-newline': ['error', {
    allowAllPropertiesOnSameLine: true,
  }],
  'one-var': ['error', 'never'],
  'one-var-declaration-per-line': ['error', 'always'],
  'operator-assignment': ['error', 'always'],
  'operator-linebreak': ['error', 'before', {
    overrides: {
      '=': 'none',
    },
  }],
  'padded-blocks': ['error', {
    blocks: 'never',
    classes: 'never',
    switches: 'never',
  }],
  'padding-line-between-statements': 'off',
  'prefer-exponentiation-operator': 'error',
  'prefer-object-spread': 'error',
  'quote-props': ['error', 'consistent-as-needed'],
  'quotes': ['error', 'single', {
    avoidEscape: true,
  }],
  'semi': ['error', 'always'],
  'semi-spacing': ['error', {
    after: true,
    before: false,
  }],
  'semi-style': ['error', 'last'],
  'sort-vars': 'error',
  'space-before-blocks': 'error',
  'space-before-function-paren': ['error', {
    anonymous: 'always',
    asyncArrow: 'always',
    named: 'never',
  }],
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': 'error',
  'space-unary-ops': ['error', {
    nonwords: false,
    overrides: {},
    words: true,
  }],
  'spaced-comment': ['error', 'always', {
    block: {
      balanced: true,
      exceptions: ['-', '+'],
      markers: ['=', '!'],
    },
    line: {
      exceptions: ['-', '+'],
      markers: ['=', '!'],
    },
  }],
  'switch-colon-spacing': ['error', {
    after: true,
    before: false,
  }],
  'template-tag-spacing': ['error', 'never'],
  'unicode-bom': ['error', 'never'],
  'wrap-regex': 'error',
};
const rules = {
  'camelcase': ['error', {
    ignoreDestructuring: false,
    properties: 'always',
  }],
  'consistent-this': 'off',
  'func-name-matching': ['error', 'always', {
    includeCommonJSModuleExports: false,
  }],
  'func-names': ['error', 'always', {
    generators: 'as-needed',
  }],
  'func-style': ['error', 'expression'],
  'id-blacklist': 'off',
  'id-length': 'off',
  'id-match': 'off',
  'line-comment-position': ['error', {
    applyDefaultPatterns: true,
    ignorePattern: '',
    position: 'above',
  }],
  'max-depth': ['off'],
  'max-len': ['error', 500, 2, {
    ignoreComments: false,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreUrls: true,
  }],
  'max-lines': 'off',
  'max-lines-per-function': 'off',
  'max-nested-callbacks': 'off',
  'max-params': 'off',
  'max-statements': 'off',
  'max-statements-per-line': 'off',
  'multiline-ternary': ['error', 'never'],
  'new-cap': ['error', {
    capIsNew: false,
    capIsNewExceptions: [
      'Immutable.Map',
      'Immutable.Set',
      'Immutable.List',
    ],
    newIsCap: true,
    newIsCapExceptions: [],
  }],
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-continue': 'error',
  'no-inline-comments': 'error',
  'no-mixed-operators': ['error', {
    allowSamePrecedence: false,
    groups: [
      ['%', '**'],
      ['%', '+'],
      ['%', '-'],
      ['%', '*'],
      ['%', '/'],
      ['**', '+'],
      ['**', '-'],
      ['**', '*'],
      ['**', '/'],
      ['&', '|', '^', '~', '<<', '>>', '>>>'],
      ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
      ['&&', '||'],
      ['in', 'instanceof'],
    ],
  }],
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-assign': 'error',
  'no-negated-condition': 'off',
  'no-nested-ternary': 'error',
  'no-new-object': 'error',
  'no-plusplus': 'error',
  'no-restricted-syntax': ['error',
    {
      message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      selector: 'ForInStatement',
    },
    {
      message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      selector: 'ForOfStatement',
    },
    {
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      selector: 'LabeledStatement',
    },
    {
      message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      selector: 'WithStatement',
    }],
  'no-tabs': 'error',
  'no-ternary': 'off',
  'no-underscore-dangle': 'off',
  'sort-keys': ['error', 'asc', {
    caseSensitive: true,
    natural: false,
  }],
};
module.exports = {
  rules: {
    ...fixableRules,
    ...rules,
  },
};
