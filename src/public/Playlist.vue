<style scoped>
  .title{
    position: sticky;
    top: 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    font-size: 16px;
    background: #fff;
  }
  .icon{
    font-size: 20px;
    margin-right: 10px;
  }
  .title-left{
    display: flex;
    align-items: center;
    color: #000;
  }
  .title-left h3{
    font-weight: bold;
  }
  .total{
    color: #666;
  }
  .title-right{
    flex: 0 0 150px;
    height: 30px;
    line-height: 30px;
    border-radius: 14px;
    color: #fff;
    text-align: center;
    background-color: #f00;
  }
  .songList-wrapper{
    overflow: hidden;
  }
</style>

<template>
  <div class="playlist">
    <div class="title">
      <div class="title-left">
        <i class="iconfont icon-shipin icon"></i>
        <h3>播放全部</h3>
        <span class="total">(共{{playlist.length}}首)</span>
      </div>
      <span v-if="subShow">收藏全部</span>
      <span class="title-right" v-if="!subShow">＋收藏({{subCount}}万)</span>
    </div>
    <div class="songList-wrapper" ref="songList">
      <song-list :songList="playlist" @moveToSong="moveToSong"></song-list>
    </div>
  </div>
</template>

<script>
import SongList from '../public/SongList'
import {mapGetters} from 'vuex'

export default {
  props: ['num', 'subCount'],
  data () {
    return {
      subShow: false
    }
  },
  created () {
    if (this.num === 1) {
      this.subShow = true
    } else {
      this.subShow = false
    }
  },
  computed: {
    ...mapGetters(['playlist'])
  },
  methods: {
    moveToSong (id) {
      this.$router.push({
        path: `/music/${id}`
      })
    }
  },
  components: {
    SongList
  }
}
</script>
