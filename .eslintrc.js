module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: ['plugin:vue/strongly-recommended', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  rules: {
    'no-restricted-globals': 0,
  }
};
