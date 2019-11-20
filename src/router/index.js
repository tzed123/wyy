import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //tz导入路径
  {path: '/main',component: () => import('@/views/tz/Main.vue')},//主界面
  {path: '/search',component: () => import('@/views/tz/Search.vue')},
  {path: '/searchbar',component: () => import('@/views/tz/SearchBar.vue')},
  {path:'/',component:()=> import ('@/components/tz/Collect.vue')},
  //dj
  {path:'/page',component:()=> import ('@/components/dj/page.vue')},
  {path:'/login',component:()=> import ('@/components/dj/login.vue')},
  {path:'/loginn',component:()=> import ('@/components/dj/loginn.vue')},
]

const router = new VueRouter({
  routes
})

export default router
