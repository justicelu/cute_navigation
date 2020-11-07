import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// 导入主页
import Home  from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    // 重定向 将路径 '/' 定向为 '/login'
    { path: '/', redirect: '/home' },
  {path:'/home',component:Home}
  
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
