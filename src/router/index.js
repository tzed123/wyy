import Vue from 'vue'
import VueRouter from 'vue-router'
//两种导入方式
//1.(1)导入
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [   
  //1.(2)注册 
  // {path: '/',component:Home}, 
  //2.利用匿名函数直接注册导入的文件
  // {path: '/about',component: () => import('../views/About.vue')}
  {path: '/discovery',component: () => import('../views/Discovery.vue')}

]

const router = new VueRouter({
  routes
})

export default router
