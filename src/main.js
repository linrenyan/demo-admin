import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './icons'
import ElementUI from 'element-ui'
import '@/styles/element-variables.scss'
Vue.config.productionTip = false
import '@/styles/main.scss'

Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
