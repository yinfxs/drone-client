import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'framework7/css/framework7.min.css'
import Framework7 from 'framework7/framework7.esm.bundle'
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle'

Framework7.use(Framework7Vue)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
