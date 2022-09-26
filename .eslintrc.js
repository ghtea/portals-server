module.exports = {
  extends: [
    'airbnb-base/legacy',
    'airbnb-typescript/base',
    'prettier'
  ],
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'dist'],
  rules: {
    // nest js template
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // formatting
    // pay attention to use same rules with prettier
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    // import
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        js: 'never',
        mjs: 'never',
      },
    ],
    // less strict
    'class-methods-use-this': 'off'
  },
};
