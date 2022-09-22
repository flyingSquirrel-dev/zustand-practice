module.exports = {
  parser: '@typescript-eslint/parser',
  "plugins": [
    "@typescript-eslint",
    "simple-import-sort"
  ],
  "extends": [
    "eslint:recommended",
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    "prettier",
  ],
  env: {
    browser: true,
    es2021: true
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    ],
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
    "react/jsx-space-before-closing": "error",
    "@emotion/jsx-import": "off",
    "indent": [
      "error",
      2
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxBOF": 1
      }
    ],
    "no-trailing-spaces": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  }
}
