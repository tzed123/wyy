import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import mintui from 'mint-ui'
import "../public/css/common.css"
import Top from './components/Top.vue'
import SearchBar from './components/SearchBar.vue'
Vue.component("top",Top);
Vue.component("sbar",SearchBar);

Vue.use(mintui)

axios.defaults.baseURL="http://localhost:8080";
axios.defaults.withCredentials=true;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
