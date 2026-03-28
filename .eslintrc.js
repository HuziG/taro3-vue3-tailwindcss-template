module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier',
    '@vue/typescript',
    'prettier',
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  globals: {
    wx: 'readonly',
  },
  rules: {
    'comma-dangle': 'off',
    'vue/multi-word-component-names': 'off',
    'no-debugger': 'error',
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': ['off'], //禁止使用any
    eqeqeq: 2, //必须使用全等
    'max-lines': 'off', // 限制行数
    complexity: 'off', // 限制复杂度
    'require-await': 'off',
  },
}
//可以添加规则 禁止
