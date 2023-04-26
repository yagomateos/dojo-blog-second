module.exports = {
  env: {
    browser: true, /* El objetivo del código es ejecutar en navegadores */
    es2021: true, /* El código estará escrito en ECMAScript 2021 */
  },
  extends: [
    "eslint:recommended", /* Reglas marcadas con ✓ en eslint.org/docs/rules/ */
    "standard", /* Reglas del paquete eslint-config-standard */
    "prettier",
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: 12, /* Establece la versión de ECMAScript que se usará */
    sourceType: "script", /* Indica si se usan módulos ESM o solo scripts */
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
