import VueI18n from 'vue-i18n'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'
import ptBR from './lang/pt-BR'

export default ({ Vue }) => {
  Vue.use(VueI18n)
  const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en',
    messages: {
      'zh': zhCN,
      'zh-CN': zhCN,
      'en': enUS,
      'en-US': enUS,
      'pt': ptBR,
      'pt-BR': ptBR,
    },
  })
  console.log('i18n: ', i18n)
  return i18n
}
