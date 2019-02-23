const path = require('path')
console.log('plugin i18n')
module.exports = () => ({
  name: '@theme-meteorlxy/vue-i18n',

  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceApp.js'),
  ],
})
