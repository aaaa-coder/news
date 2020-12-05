import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Login from './views/Login.vue'
//引入axios
import axios from "./utils/axios";
//引入vant ui
import Vant, { Toast } from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//引入uploader
import { Uploader } from 'vant';
Vue.use(Uploader);





Vue.filter('setImgUrl', (objUrl) => {
  if (objUrl.indexOf('http') > -1) {
    return objUrl;
  } else {
    return axios.defaults.baseURL + objUrl;
  }
})

//挂载到原型上
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

