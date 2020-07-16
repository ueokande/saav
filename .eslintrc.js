module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  env: {
    browser: true,
  },
  ignorePatterns: [
    "src/react-app-env.d.ts",
    "src/serviceWorker.ts",
    "src/setupTests.ts",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
  }
};
