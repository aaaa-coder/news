import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Login from './views/Login.vue'
//引入axios
import axios from "axios";
//引入vant ui
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//挂载到原型上
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

router.beforeEach((to, from, next) => {
  // console.log(to);
  const hasToken = localStorage.getItem('token');
  if (to.path === "/profile") {
    if (hasToken) {
      router.push('/profile');
    }
    else {
      router.push('/login')
    }
  }
  next();
})