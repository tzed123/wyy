import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const playMode = {
  sequence: 0,
  loop: 1,
  random: 2
}

export default new Vuex.Store({
  state: {//共享数据
    playing: false, // 播放器是否正在播放
    fullScreen: false, // 播放器属于全屏状态还是缩小状态
    playinglist: [],// 播放列表
    sequenceList: [],// 顺序列表
    mode: playMode.sequence,
    currentIndex: -1// 当前播放歌曲的索引
  },
  mutations: {//修改函数
    SET_PLAYING_STATE(state, flag) {
      state.playing = flag;
    },
    SET_FULL_SCREEN(state, flag) {
      state.fullScreen = flag;
    },
    SET_PLAYLIST(state, list) {
      state.playingList = list;
    },
    SET_SEQUENCELIST(state,list) {
      state.sequenceList = list;
    },
    SET_PALY_MODE(state,mode) {
      state.mode = mode;
    },
    SET_CURRENT_INDEX(state,index) {
      state.currentIndex = index;
    },

  },
  getters: {//获取函数
    currentSong: state => {
      return state.playingList[state.currentIndex] || {}
    },
    getSequenceList: state => {
      return state.sequenceList;
    }
  },
  actions: {//异步修改函数
    selectPlay({state,commit},{index,list}) {
      commit('SET_SEQUENCELIST',list);
      commit('SET_PLAYLIST',list);
      commit('SET_CURRENT_INDEX',index);// 当前播放索引
      commit('SET_FULL_SCREEN',true);// 当前播放页的展开收起
      commit('SET_PLAYING_STATE',true)// 播放状态
    },
    deleteSong ({commit, state}, song) {// 清除当前播放列表
      let playingList = state.playingList.slice()
      let sequenceList = state.sequenceList.slice()
      let currentIndex = state.currentIndex
      let pIndex = playingList.findIndex((item) => {// 找到当前播放playlist中的索引
        return item.id === song.id
      })
      playingList.splice(pIndex, 1)// 删除点击这条
      let sIndex = sequenceList.findIndex((item) => {// 找到顺序列表中的索引
        return item.id === song.id
      })
      sequenceList.splice(sIndex, 1)// 删除点击这条
      if (currentIndex > pIndex || currentIndex === playingList.length) {
        currentIndex--
      } // 删除的song在播放列表前或为播放列表最后一项时 currentIndex--

      commit('SET_PLAYLIST', playingList)
      commit('SET_SEQUENCELIST', sequenceList)
      commit('SET_CURRENT_INDEX', currentIndex)

      const playingState = playingList.length > 0
      // 歌曲删除完毕时停止播放
      commit('SET_PLAYING_STATE', playingState)
    },
    clearAllSongs ({commit,state}) {
      commit('SET_PLAYLIST', [])
      commit('SET_SEQUENCELIST', [])
      commit('SET_CURRENT_INDEX', -1)
      commit('SET_PLAYING_STATE', false)
    }
  },
  modules: {
    
  }
})
