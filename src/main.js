import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import mintui from 'mint-ui'
import "../public/css/common.css"
//顶部 我的/发现/VIP
import Top from './components/Top.vue'
//顶部 查找歌曲
import SearchBar from './components/SearchBar.vue'
//收藏
import Collect from './components/Collect.vue'
import CreateList from './components/CreateList.vue'
import PlayBar from './components/PlayBar.vue'
import SendMsg from './components/SendMsg.vue'
import Time from './components/Time.vue'
import ControlList from './components/ControlList.vue'
Vue.component("top",Top);
Vue.component("sbar",SearchBar);
Vue.component("coll",Collect)
Vue.component("crlist",CreateList)
Vue.component("plbar",PlayBar)
Vue.component("sendmsg",SendMsg)
Vue.component("ti",Time)
Vue.component("con",ControlList)

Vue.use(mintui)

axios.defaults.baseURL="http://localhost:8080";
axios.defaults.withCredentials=true;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
