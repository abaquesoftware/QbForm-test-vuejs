module.exports = {
  "extends": "eslint:all",
  "ignorePatterns": [ "*  "],
  "rules": {
      // override default options
      "comma-dangle": ["error", "always"],
      "indent": ["error", 2],
      "no-cond-assign": ["error", "always"],

      // disable now, but enable in the future
      "one-var": "off", // ["error", "never"]

      // disable
      "init-declarations": "off",
      "no-console": "off",
      "no-inline-comments": "off",
  }
}



/*
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  "ignorePatterns": [ "*.umd.min.js", "*.umd.js", "/home/abaque/Desktop/perso/git/konf/konf-frontend/konf-vuejs-2/dist/KonfVue.umd.min.js"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  }
}
*/
