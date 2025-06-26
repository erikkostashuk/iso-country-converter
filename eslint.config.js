const globals = require("globals");
const pluginJs = require("@eslint/js");
const jest = require("eslint-plugin-jest");

module.exports = [
  {
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    ...pluginJs.configs.recommended,
    files: ["**/*.js"],
    rules: {
    }
  },
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    },
    plugins: {
      jest: jest
    },
    rules: {
      ...jest.configs.recommended.rules
    }
  }
];
