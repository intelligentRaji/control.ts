module.exports = {
  root: true,
  extends: ['@control.ts/eslint-config/common.js'],
  parserOptions: {
    project: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
