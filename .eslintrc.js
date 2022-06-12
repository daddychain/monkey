module.exports = {
  root: true,
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': [1, 2],
    'arrow-parens': 0,
    'semi': [2, 'never'],
    'block-spacing': [2, 'always'],
    'eol-last': [2, 'always'],
    'eqeqeq': [2, 'always'],
    'jsx-quotes': [2, 'prefer-single'],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'no-multi-spaces': 2,
    'no-trailing-spaces': 2,
    'no-extra-parens': [2, 'all'],
    'arrow-spacing': 2,
    'no-var': 2,
    'no-duplicate-imports': 2,
    'no-dupe-class-members': 2,
    'space-before-blocks': 2,
    'space-in-parens': 2,
    'switch-colon-spacing': 2,
    'lines-between-class-members': [2, 'never'],
    'no-multiple-empty-lines': 2,
  }
};
