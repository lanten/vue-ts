module.exports = {
  root: true,

  env: {
    node: true,
  },

  globals: {
    '$fn': false,
  },

  extends: ['plugin:vue/essential', '@vue/prettier', '@vue/typescript'],

  rules: {
    'no-console': 'off', // 禁用 console
    'no-debugger': 'off', // 禁用 debugger
    'no-alert': 'off', // 禁用 alert

    "indent": ["error", 2], // 强制使用两个空格作为缩进
    quotes: ['error', 'single'], //强制使用单引号
    semi: ['error', 'never'], //强制不使用分号结尾
    'comma-dangle': ['error', 'always-multiline'], // 逗号结束
    'no-param-reassign': 'error', // 禁止对 function 的参数进行重新赋值
    'jsx-quotes': ["error", "prefer-double"], // 强制所有 JSX 属性值使用双引号。
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}
