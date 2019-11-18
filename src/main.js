import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import mintui from 'mint-ui'
import "mint-ui/lib/style.css"
//引入公共样式
import "../public/css/common.css"
//tz引入路径
import Discovery from '@/components/tz/Discovery.vue'
import Collect from '@/components/tz/Collect.vue'
import CreateList from '@/components/tz/CreateList.vue'
import PlayBar from '@/components/tz/PlayBar.vue'
import SendMsg from '@/components/tz/SendMsg.vue'
import TimeClose from '@/components/tz/TimeClose.vue'
import ControlList from '@/components/tz/ControlList.vue'



//yh引入路径
import index from '@/components/yh/index.vue'
import buymusic from '@/components/yh/buymusic.vue'
import order from '@/components/yh/order.vue'
import personal from '@/components/yh/personal.vue'
import vip from '@/components/yh/vip.vue'

//dj引入路径
import login from '@/components/dj/login.vue'
import page from '@/components/dj/page.vue'
//zz引入路径
import MultiSelect from '@/components/zz/MultiSelect.vue'
import SongDetails from '@/components/zz/SongDetails.vue'
import SongSheet from '@/components/zz/SongSheet.vue'
import SongSheet2 from '@/components/zz/SongSheet2.vue'
//dt引入路径

//tz注册全局组件标签
Vue.component("discovery",Discovery);//发现页面
Vue.component("collect",Collect)//收藏到歌单
Vue.component("createlist",CreateList)//创建歌单
Vue.component("playbar",PlayBar)//底部播放条
Vue.component("sendmsg",SendMsg)//发送消息
Vue.component("timeclose",TimeClose)//定时关闭
Vue.component("controllist",ControlList)//歌单省略号拓展功能

//yh注册全局组件标签
//dj注册全局组件标签
//zz注册全局组件标签
Vue.component("MultiSelect",MultiSelect)
Vue.component("SongDetails",SongDetails)
Vue.component("SongSheet",SongSheet)
Vue.component("SongSheet2",SongSheet2)

//dt注册全局组件标签

//挂载mint-ui
Vue.use(mintui)
//配置axios基础路径
axios.defaults.baseURL="http://localhost:8080";
axios.defaults.withCredentials=true;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
