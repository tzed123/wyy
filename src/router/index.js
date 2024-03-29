import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  //tz导入路径
  {path: '/main',component: () => import('@/views/tz/Main.vue'),meta:{keepAlive:true}},//主界面 
  {path: '/searchbar',component: () => import('@/views/tz/SearchBar.vue')},
  {path:'/',component:()=> import ('@/views/tz/Main.vue'),meta:{keepAlive:true}},
  //dj
  {path:'/login',component:()=> import ('@/components/dj/login.vue')},
  //zz导入路径
  {path:'/commentInterface',component:()=>import('@/views/zz/CommentInterface.vue')}, 
  {path:'/songsheetz',component:()=>import('@/views/zz/SongSheetz.vue')},
  //dt导入路径
  {path: '/player',component: () => import('@/views/dt/player.vue')},
  {path: '/reg',component: () => import('@/views/dt/reg.vue')},

  //yh
  {path:"/buymusic",component:()=>import("@/views/yh/buymusic.vue")},
  {path:"/order",component:()=>import("@/views/yh/order.vue")},
  {path:"/vip",component:()=>import("@/views/yh/vip.vue")},
]


const router = new VueRouter({
  mode:'history',
  routes
})

export default router
