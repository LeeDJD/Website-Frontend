module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: "module"
  },
  extends: [
    '@nuxtjs'
  ],
  // add your custom rules here
  rules: {
    "space-before-function-paren": ["error", "never"]
  }
}
