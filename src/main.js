import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import mintui from 'mint-ui'
import "../public/css/common.css"
//顶部 我的/发现/VIP
import Top from './components/Top.vue'

//收藏
import Collect from './components/Collect.vue'
import CreateList from './components/CreateList.vue'
import PlayBar from './components/PlayBar.vue'
import SendMsg from './components/SendMsg.vue'
import TimeClose from './components/TimeClose.vue'
import ControlList from './components/ControlList.vue'

Vue.component("top",Top);

Vue.component("collect",Collect)
Vue.component("createlist",CreateList)
Vue.component("playbar",PlayBar)
Vue.component("sendmsg",SendMsg)
Vue.component("timeclose",TimeClose)
Vue.component("controllist",ControlList)


Vue.use(mintui)

axios.defaults.baseURL="http://localhost:8080";
axios.defaults.withCredentials=true;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
