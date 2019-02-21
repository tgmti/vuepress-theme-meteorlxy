const path = require('path')
console.log('plugin i18n')
module.exports = () => ({
  name: '@theme-meteorlxy/vue-i18n',

  clientRootMixin: path.resolve(__dirname, 'enhanceApp.js'),

})
