import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //tz导入路径
  {path: '/main',component: () => import('@/views/tz/Main.vue')},//主界面
  {path: '/search',component: () => import('@/views/tz/Search.vue')},
  {path: '/searchbar',component: () => import('@/views/tz/SearchBar.vue')},
  {path:'/',component:()=> import ('@/views/tz/Main.vue')},

  //dj

  {path:'/login',component:()=> import ('@/components/dj/login.vue')},
<<<<<<< HEAD
  {path:'/loginn',component:()=> import ('@/components/dj/loginn.vue')},
=======
  
  //zz导入路径
  {path:'/commentInterface',component:()=>import('@/views/zz/CommentInterface.vue')},

  //dt导入路径
  {path: '/player',component: () => import('@/views/dt/player.vue')},
  {path: '/reg',component: () => import('@/views/dt/reg.vue')},


  //yh
  {path:"/index",component:()=>import("@/components/yh/index.vue")},
  {path:"/buymusic",component:()=>import("@/views/yh/buymusic.vue")},
  {path:"/order",component:()=>import("@/views/yh/order.vue")},
  {path:"/vip",component:()=>import("@/views/yh/vip.vue")},
  {path:"/index",component:()=>import("@/components/yh/index.vue")},
  {path:"/personal",component:()=>import("@/components/yh/personal.vue")},

>>>>>>> bb9045ac90e5305a2bb656593672d3886b60f2c0
]


const router = new VueRouter({
  routes
})

export default router
