import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playlist: [],
    // currentIndex: sessionStorage.getItem('index'),
    currentIndex: 0,
    currentSong: sessionStorage.getItem('song')
  },
  getters: {
    playlist: state => state.playlist,
    currentIndex: state => state.currentIndex,
    currentSong: state => {
      if (typeof state.currentSong === 'string' && state.currentSong) {
        return JSON.parse(state.currentSong)
      } else {
        return state.currentSong
      }
    }
  },
  mutations: {
    setPlaylist (state, list) {
      state.playlist = list
    },
    getSong (state, index) {
      sessionStorage.setItem('song', JSON.stringify(state.playlist[index]))
      state.currentSong = state.playlist[index]
    },
    setCurrentIndex (state, index) {
      // sessionStorage.setItem('index', index)
      state.currentIndex = index
    }
  }
})
