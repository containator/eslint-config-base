module.exports = {
  rules: {
    '@stylistic/jsx-child-element-spacing': 'off',
    '@stylistic/jsx-closing-bracket-location': [
      'error',
      'line-aligned'
    ],
    '@stylistic/jsx-closing-tag-location': 'error',
    '@stylistic/jsx-curly-brace-presence': [
      'error',
      {
        children: 'never',
        props: 'never'
      }
    ],
    '@stylistic/jsx-curly-newline': [
      'error',
      'consistent'
    ],
    '@stylistic/jsx-curly-spacing': [
      'error',
      'never',
      {
        allowMultiline: true
      }
    ],
    '@stylistic/jsx-equals-spacing': [
      'error',
      'never'
    ],
    '@stylistic/jsx-first-prop-new-line': [
      'error',
      'multiline-multiprop'
    ],
    '@stylistic/jsx-indent': [
      'error',
      2
    ],
    '@stylistic/jsx-indent-props': [
      'error',
      2
    ],
    '@stylistic/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline'
      }
    ],
    '@stylistic/jsx-newline': [
      'error',
      {
        prevent: true
      }
    ],
    '@stylistic/jsx-one-expression-per-line': [
      'error',
      {
        allow: 'none'
      }
    ],
    '@stylistic/jsx-props-no-multi-spaces': 'error',
    '@stylistic/jsx-self-closing-comp': [
      'error', {
        component: true,
        html: true
      }
    ],
    '@stylistic/jsx-sort-props': 'error',
    '@stylistic/jsx-tag-spacing': [
      'error',
      {
        afterOpening: 'never',
        beforeClosing: 'never',
        beforeSelfClosing: 'always',
        closingSlash: 'never'
      }
    ],
    '@stylistic/jsx-wrap-multilines': [
      'error',
      {
        arrow: 'parens-new-line',
        assignment: 'parens-new-line',
        condition: 'parens-new-line',
        declaration: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
        return: 'parens-new-line'
      }
    ]
  }
};
