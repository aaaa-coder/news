import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Personal from '../views/MyItem/Personal.vue'
import UserEdit from "../views/MyItem/UserEdit.vue"
import ProfileIndex from "../views/Profile/Index.vue"
import UserInfoEdit from "../views/Profile/UserInfoEdit.vue"
import Follow from "../views/Profile/Follow.vue"
import Test from "../views/test.vue"
import NewsIndex from "../views/Index.vue"
import NewsContent from "../components/NewsContent.vue"
import Search from "../views/Search.vue"
import Administration from "../views/Administration.vue"
import NewsParticular from "../views/MyItem/NewsParticular.vue"
import VideoItem from "../views/MyItem/VideoItem.vue"
import Favorite from "../views/Profile/Favorite.vue"
import PostDetail from "../views/PostDetail.vue"
import UserComment from "../views/UserComment.vue"



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
    path: '/follow',
    component: Follow,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/index',
    component: NewsIndex,
  }, {
    path: '/newsContent',
    component: NewsContent,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/administration',
    component: Administration,
    meta: {
      needAuth: true
    },
  }, {
    path: '/particular',
    component: NewsParticular,
    name: 'particular',
  }
  , {
    path: '/videoItem',
    component: VideoItem,
    name: 'videoItem',
  },
  {
    path: '/favorite',
    component: Favorite,
    meta: {
      needAuth: true
    }
  }, {
    path: '/postDetail',
    component: PostDetail,
    name: 'postDetail'
  }, {
    path: '/userComment/:id',
    component: UserComment,
    meta: {
      needAuth: true
    }
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
