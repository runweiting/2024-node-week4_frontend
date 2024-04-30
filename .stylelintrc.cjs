module.exports = {
  root: true,
  plugins: ["stylelint-prettier"],
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-rational-order",
    "stylelint-config-recommended-vue",
  ],
  customSyntax: "postcss-html",
  overrides: [
    {
      files: ["**/*.vue"],
      customSyntax: "postcss-html",
    },
  ],
  rules: {
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"],
      },
    ],
    // indentation: 2,
    // "number-leading-zero": "never",
    "no-descending-specificity": null,
    "font-family-no-missing-generic-family-keyword": null,
    "selector-type-no-unknown": null,
    "at-rule-no-unknown": null,
    "no-duplicate-selectors": null,
    "no-empty-source": null,
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global"] },
    ],
  },
};
