import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// 导入主页
import Home  from '@/views/Home.vue'
// 导入 game
import Show  from  '@/views/show/Show.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    // 重定向 将路径 '/' 定向为 '/login'
    { path: '/', redirect: '/home' 
    },
  {path:'/home',component:Home,meta:{
    title:'汝科大_发现更多可能'
  }},{
    path:'/show',component:Show,meta: {
        title: 'Show => ∞ '
      }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
