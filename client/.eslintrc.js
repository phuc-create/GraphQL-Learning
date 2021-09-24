module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'standard-react',
    'plugin:jest/recommended',
    'react-app',
    'prettier',
  ],
  plugins: ['jest', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  rules: {
    'template-curly-spacing': 'off',
    'no-template-curly-in-string': 'off',
    indent: 'off',
    camelcase: 'off',
    'no-return-assign': 'off',
    'one-var': 'off',
    'no-prototype-builtins': 'warn',
    'prefer-promise-reject-errors': 'off',
    'standard/object-curly-even-spacing': 'off',
    'react/prop-types': 1,
    'react/no-unused-prop-types': 1,
    'react/self-closing-comp': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-pascal-case': 'off',
    'react/jsx-handler-names': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'jest/no-conditional-expect': 'warn',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        arrowParens: 'avoid',
      },
    ],
  },
  globals: {
    axios: true,
    auth0: true,
    google: true,
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'no-unused-vars': 'off',
        'no-global-assign': 'off',
      },
    },
  ],
}
