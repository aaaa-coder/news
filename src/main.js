import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Login from './views/Login.vue'
//引入axios
import axios from "axios";
//引入vant ui
import Vant, { Toast } from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//引入uploader
import { Uploader } from 'vant';
Vue.use(Uploader);
//添加axios基地址
// axios.defaults.baseURL = "http://liangwei.tech:3000";
axios.defaults.baseURL = "http://157.122.54.189:9083";
//添加axios请求拦截器
axios.interceptors.request.use(config => {
  if (!config.headers.Authorization && localStorage.getItem('token')) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
  }
  return config;
})

//添加axios响应拦截器
axios.interceptors.response.use(res => {
  //定义返回码的正则
  const AuthErrReg = /^4\d{2}$/;
  //进行判断，如果符合就弹出错误信息，进行防御性编程
  if (AuthErrReg.test(res.data.statusCode)) {
    Toast.fail(res.data.message || '系统错误');
  }

  if (res.data.message == '用户信息验证失败') {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    router.replace('/login')
  }

  return res;
})

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

