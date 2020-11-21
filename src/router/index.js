import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Personal from '../views/MyItem/Personal.vue'
import UserEdit from "../views/MyItem/UserEdit.vue"
import ProfileIndex from "../views/Profile/Index.vue"
import UserInfoEdit from "../views/Profile/UserInfoEdit.vue"
import UserFocus from "../views/Profile/UserFocus.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  }, {
    path: '/register',
    component: Register
  },
  {
    path: '/personal',
    component: Personal,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/userEdit',
    component: UserEdit,
    name: 'userEdit',
    meta: {
      needAuth: true
    }
  },
  {
    path: '/profile',
    component: ProfileIndex,
    meta: {
      needAuth: true
    },
  },
  {
    path: '/userInfoEdit',
    component: UserInfoEdit,
    meta: {
      needAuth: true
    },
  }, {
    path: '/userFocus',
    component: UserFocus,
    meta: {
      needAuth: true
    },
  }
]

const router = new VueRouter({
  routes
})
//进行响应拦截器，通过使用meta属性
//进行验证修改
router.beforeEach((to, from, next) => {
  const hasToken = localStorage.getItem('token');
  if (to.meta.needAuth) {
    if (hasToken) {
      return next();
    } else {
      return router.replace('/login').catch(err => { });
    }
  }
  next();
})
export default router
