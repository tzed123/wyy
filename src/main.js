import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import mintui from 'mint-ui'
import "mint-ui/lib/style.css"
//引入公共样式
import "../public/css/common.css"
//引入tap事件
//tz引入路径
import Discovery from '@/components/tz/Discovery.vue'
import PlayBar from '@/components/tz/PlayBar.vue'
import Ellipsis from '@/components/tz/Ellipsis.vue'
import Msk from '@/components/tz/Msk.vue'
import Mine from '@/components/tz/Mine.vue'

//yh引入路径
import index from '@/components/yh/index.vue'
import personal from '@/components/yh/personal.vue'
//dj引入路径


//zz引入路径
import MultiSelect from '@/components/zz/MultiSelect.vue'
import SongDetails from '@/components/zz/SongDetails.vue'
import SongSheet from '@/components/zz/SongSheet.vue'
import SongSheet2 from '@/components/zz/SongSheet2.vue'
//dt引入路径
//引入字体图片样式文件
import './assets/dt/iconfont/iconfont.css'
//tz注册全局组件标签
Vue.component("discovery",Discovery);//发现页面
Vue.component("playbar",PlayBar)//底部播放条
Vue.component("ellipsis",Ellipsis)//歌单省略号拓展功能
Vue.component("msk",Msk)//歌单省略号拓展功能
Vue.component("mine",Mine)//我的界面
//yh注册全局组件标签
Vue.component("index",index)
Vue.component("personal",personal)
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
//暂时被zz删了
Vue.prototype.axios=axios;
axios.defaults.baseURL="http://localhost:3000";
axios.defaults.withCredentials=true;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
