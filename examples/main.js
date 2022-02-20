import Vue from 'vue'
import App from './App.vue'
import '@willes/wui/dist/theme-chalk/index.css'
import wui from '@willes/wui'

Vue.config.productionTip = false
Vue.use(wui)
new Vue({
  render: (h) => h(App)
}).$mount('#app')
