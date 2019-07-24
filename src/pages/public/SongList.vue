<style scoped>
  .song-list{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
    letter-spacing: 1px;
    padding: 5px;
    box-sizing: border-box;
    font-size: 16px;
  }
  .lists-wrapper{
    width: 100%;
  }
  .lists{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }
  .num{
    margin-right: 10px;
    flex: 0 0 28px;
    font-size: 14px;
  }
  .names{
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 5px;
  }
  .song-name{
    margin-bottom: 3px;
    width: 300px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .author-name{
    color: #666;
    font-size: 14px;
  }
</style>

<template>
  <div class="song-list">
    <ul  class="lists-wrapper">
      <li class="lists" v-for="(song, i) in songList" :key="i" @click="moveToSongs(song.id, i)">
        <span class="num">{{(i + 1) | num}}</span>
        <div class="names">
          <div class="name">
            <p class="song-name">{{song.title}}</p>
            <span class="author-name">{{song.author}}</span>
          </div>
          <div class="list-icon" v-if="song.mv">
            <i class="iconfont icon-shipin"></i>
          </div>
        </div>
        <i class="iconfont icon-dian1 icon"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  props: ['songList'],
  data () {
    return {
      songScroll: null
    }
  },
  filters: {
    num (num) {
      return num < 10 ? '0' + num : num
    }
  },
  computed: {
    ...mapGetters([
      'currentIndex'
    ])
  },
  methods: {
    moveToSongs (id, i) {
      this.getSong(i)
      this.$emit('moveToSong', id)
      this.setCurrentIndex(i)
    },
    ...mapMutations(['getSong', 'setCurrentIndex'])
  }
}
</script>
