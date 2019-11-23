import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//共享数据
    isShow:false
  },
  mutations: {//修改函数
    xshow(state){
      state.isShow=!state.isShow
      return state.isShow
    }
  },
  getters: {//获取函数
    getShow(state){
      return state.isShow
    }
  },
  actions: {//异步修改函数

  },
  modules: {

  }
})
