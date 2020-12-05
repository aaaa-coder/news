import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入axios
import axios from "./utils/axios";
//引入vant ui
import { ActionSheet, Dialog, Field, List, Tab, Tabs, Uploader } from 'vant';
import "vant/lib/tabs/index.css"
import "vant/lib/tab/index.css"
import "vant/lib/list/index.css"
import "vant/lib/uploader/index.css"
import "vant/lib/dialog/index.css"
import "vant/lib/field/index.css"
import "vant/lib/action-sheet/index.css"


Vue.use(ActionSheet);
Vue.use(Dialog);
Vue.use(Field);
Vue.use(List);
Vue.use(Tab);
Vue.use(Tabs);
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

