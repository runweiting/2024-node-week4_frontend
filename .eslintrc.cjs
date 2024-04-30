module.exports = {
  root: true,
  extends: [
    // 依順序檢查規範
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    // 支援 Airbnb
    "airbnb-base",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".vue"],
      },
      node: {
        extensions: [".js", ".jsx", ".json", ".vue"],
        paths: ["src"],
      },
    },
    "import/core-modules": ["vite", "@vitejs/plugin-vue"],
  },
  rules: {
    indent: ["error", 2],
  },
};
