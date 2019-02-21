import VueI18n from 'vue-i18n'
import messages from './i18n.js'

export default ({ Vue }) => {
  Vue.use(VueI18n)
  const $i18n = new VueI18n({
    locale: 'pt-BR', // set locale
    messages,
  })
  Vue.mixin($i18n)
  console.log('the vue: ', Vue)
}
