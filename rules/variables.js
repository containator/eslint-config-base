module.exports = {
  rules: {
    'init-declarations': ['error', 'always'],
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': ['error',
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
      'top'],
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': ['error', {
      args: 'after-used',
      ignoreRestSiblings: true,
      vars: 'all',
    }],
    'no-use-before-define': ['error', {
      classes: true,
      functions: true,
      variables: true,
    }],
  },
};
