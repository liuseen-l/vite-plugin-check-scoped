module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@antfu'],
  rules: {
    'no-useless-return': 'off',
    'no-extra-boolean-cast': 'off',
    'import/export': 'off',
    'no-console': 'off',
  },
}
