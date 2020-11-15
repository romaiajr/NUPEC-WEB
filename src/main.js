import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { BootstrapVue} from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import '@/assets/styles.css'

Vue.config.productionTip = false

import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  // options here
})

new Vue({
  render: h => h(App),
}).$mount('#app')
