import Vuex from 'vuex'
import Vue from 'vue'
import {playMode} from '@/common/js/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playlist: JSON.parse(sessionStorage.getItem('playlist')),
    currentIndex: sessionStorage.getItem('index'),
    mode: playMode.sequence,
    currentSong: {}
  },
  getters: {
    playlist: state => state.playlist,
    currentIndex: state => state.currentIndex,
    mode: state => state.mode,
    currentSong: state => {
      return state.playlist[state.currentIndex] || {}
    }
  },
  mutations: {
    setPlaylist (state, list) {
      sessionStorage.setItem('playlist', JSON.stringify(list))
      state.playlist = list
    },
    getSong (state, index) {
      // sessionStorage.setItem('song', JSON.stringify(state.playlist[index]))
      state.currentSong = state.playlist[index]
    },
    setCurrentIndex (state, index) {
      sessionStorage.setItem('index', index)
      state.currentIndex = index
    },
    setPlayMode (state, mode) {
      state.mode = mode
    }
  }
})
