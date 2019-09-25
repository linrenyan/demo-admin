import Vue from 'vue'
import App from './App.vue'
import './icons'
Vue.config.productionTip = false
import '@/styles/main.scss'

new Vue({
  render: h => h(App),
}).$mount('#app')
