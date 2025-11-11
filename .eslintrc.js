/* eslint-env node */
export default {
  root: true,
  env: { browser: true, es2022: true },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'vue/html-indent': ['error', 2],
    'vue/attribute-hyphenation': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
  }
}

