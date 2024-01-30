module.exports = {
  rules: {
    'accessor-pairs': 'off',
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false
      }
    ],
    'block-scoped-var': 'error',
    'camelcase': [
      'error',
      {
        ignoreDestructuring: false,
        properties: 'always'
      }
    ],
    'capitalized-comments': [
      'error',
      'always',
      {
        ignoreInlineComments: true,
        ignorePattern: 'pragma|ignored'
      }
    ],
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: []
      }
    ],
    'complexity': 'off',
    'consistent-return': 'error',
    'consistent-this': 'off',
    'curly': [
      'error',
      'all'
    ],
    'default-case': [
      'error',
      {
        commentPattern: '^no default$'
      }
    ],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': [
      'error',
      {
        allowKeywords: true
      }
    ],
    'eqeqeq': [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    'func-name-matching': [
      'error',
      'always',
      {
        includeCommonJSModuleExports: false
      }
    ],
    'func-names': [
      'error',
      'always',
      {
        generators: 'as-needed'
      }
    ],
    'func-style': [
      'error',
      'expression'
    ],
    'grouped-accessor-pairs': 'off',
    'guard-for-in': 'error',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'init-declarations': [
      'error',
      'always'
    ],
    'logical-assignment-operators': ['error', 'never'],
    'max-classes-per-file': [
      'error',
      1
    ],
    'max-depth': [
      'off'
    ],
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'multiline-comment-style': [
      'error',
      'starred-block'
    ],
    'new-cap': [
      'error',
      {
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List'
        ],
        newIsCap: true,
        newIsCapExceptions: []
      }
    ],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-console': [
      'error',
      {
        allow: [
          'info',
          'warn',
          'error'
        ]
      }
    ],
    'no-continue': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'off',
    'no-else-return': [
      'error',
      {
        allowElseIf: false
      }
    ],
    'no-empty': 'error',
    'no-empty-function': [
      'error',
      {
        allow: [
          'arrowFunctions',
          'functions',
          'methods'
        ]
      }
    ],
    'no-empty-static-block': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-global-assign': [
      'error',
      {
        exceptions: []
      }
    ],
    'no-implicit-coercion': [
      'error',
      {
        allow: [],
        boolean: true,
        number: true,
        string: true
      }
    ],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-object-constructor': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope'
        ],
        props: true
      }
    ],
    'no-plusplus': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-globals': [
      'error',
      'addEventListener',
      'blur',
      'close',
      'closed',
      'confirm',
      'defaultStatus',
      'defaultstatus',
      'event',
      'external',
      'find',
      'focus',
      'frameElement',
      'frames',
      'history',
      'innerHeight',
      'innerWidth',
      'isFinite',
      'isNaN',
      'length',
      'location',
      'locationbar',
      'menubar',
      'moveBy',
      'moveTo',
      'name',
      'onblur',
      'onerror',
      'onfocus',
      'onload',
      'onresize',
      'onunload',
      'open',
      'opener',
      'opera',
      'outerHeight',
      'outerWidth',
      'pageXOffset',
      'pageYOffset',
      'parent',
      'print',
      'removeEventListener',
      'resizeBy',
      'resizeTo',
      'screen',
      'screenLeft',
      'screenTop',
      'screenX',
      'screenY',
      'scroll',
      'scrollBy',
      'scrollTo',
      'scrollX',
      'scrollY',
      'scrollbars',
      'self',
      'status',
      'statusbar',
      'stop',
      'toolbar',
      'top'
    ],
    'no-restricted-imports': [
      'off',
      {
        paths: [],
        patterns: []
      }
    ],
    'no-restricted-properties': [
      'error',
      {
        message: 'arguments.callee is deprecated',
        object: 'arguments',
        property: 'callee'
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'global',
        property: 'isFinite'
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'self',
        property: 'isFinite'
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'window',
        property: 'isFinite'
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'global',
        property: 'isNaN'
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'self',
        property: 'isNaN'
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'window',
        property: 'isNaN'
      },
      {
        message: 'Please use Object.defineProperty instead.',
        property: '__defineGetter__'
      },
      {
        message: 'Please use Object.defineProperty instead.',
        property: '__defineSetter__'
      },
      {
        message: 'Use the exponentiation operator (**) instead.',
        object: 'Math',
        property: 'pow'
      }
    ],
    'no-restricted-syntax': [
      'error',
      {
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        selector: 'ForInStatement'
      },
      {
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
        selector: 'ForOfStatement'
      },
      {
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        selector: 'LabeledStatement'
      },
      {
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        selector: 'WithStatement'
      }
    ],
    'no-return-assign': [
      'error',
      'always'
    ],
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false
      }
    ],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTaggedTemplates: false,
        allowTernary: false
      }
    ],
    'no-unused-labels': 'error',
    'no-useless-call': 'off',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'off',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false
      }
    ],
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'no-with': 'error',
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
        ignoreConstructors: false
      }
    ],
    'one-var': [
      'error',
      'never'
    ],
    'operator-assignment': [
      'error',
      'always'
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }
    ],
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {
          array: true,
          object: true
        },
        VariableDeclarator: {
          array: false,
          object: true
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true
      }
    ],
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'radix': 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'off',
    'require-yield': 'error',
    'sort-imports': 'off',
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        natural: false
      }
    ],
    'sort-vars': 'error',
    'strict': [
      'error',
      'never'
    ],
    'symbol-description': 'error',
    'vars-on-top': 'error',
    'yoda': 'error'
  }
};
