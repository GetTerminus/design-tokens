module.exports = {
  extends: ["@terminus/eslint-config-frontend/development"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  rules: {
    semi: [
      "error",
      "always",
    ],
  },
};
