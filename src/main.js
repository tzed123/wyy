import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import "../public/css/common.css"

axios.defaults.baseURL="http://localhost:8080";
axios.defaults.withCredentials=true;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
