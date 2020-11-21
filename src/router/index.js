import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Personal from '../views/Personal.vue'
import UserEdit from "../views/UserEdit.vue"
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
    component: Personal
  },
  {
    path: '/userEdit',
    component: UserEdit,
    name: 'userEdit'
  },
  {
    path: '/profile',
    component: ProfileIndex,
  },
  {
    path: '/userInfoEdit',
    component: UserInfoEdit,
  }, {
    path: '/userFocus',
    component: UserFocus
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const hasToken = localStorage.getItem('token');
  if (to.path == '/profile') {
    if (hasToken) {
      return next();
    } else {
      return router.replace('/login').catch(err => { });
    }
  }
  next();
})
export default router
