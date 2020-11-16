import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Login from './views/Login.vue'
Vue.config.productionTip = false

new Vue({
  router,
  Login,
  render: function (h) { return h(App) }
}).$mount('#app')
