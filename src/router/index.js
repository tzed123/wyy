import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //tz导入路径
  {path: '/main',component: () => import('@/views/tz/Main.vue')},//主界面
  {path: '/search',component: () => import('@/views/tz/Search.vue')},
  {path: '/searchbar',component: () => import('@/views/tz/SearchBar.vue')},
  {path:'/',component:()=> import ('@/components/tz/Collect.vue')},
  //dt导入路径
  {path: '/player',component: () => import('@/views/dt/player.vue')},
  {path: '/reg',component: () => import('@/views/dt/reg.vue')},
  {path: '/playingList',component: () => import('@/views/dt/playingList.vue')},
]

const router = new VueRouter({
  routes
})

export default router
