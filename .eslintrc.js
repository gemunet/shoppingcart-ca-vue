module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    // "plugin:vue/vue3-recommended"
    "plugin:vue/recommended"
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-unused-vars": "warn",
    "no-fallthrough": "warn",
    "vue/no-unused-components": "warn",

    // we should always disable console logs and debugging in production
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};