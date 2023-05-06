module.exports = {
  extends: ['mantine'],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['**/e2e/**/*.ts'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
  },
};
