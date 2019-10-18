<style scoped>
  .rank-detail{
    z-index: 14;
    font-size: 0;
  }
  .nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    position: fixed;
    top: 0;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    font-size: 20px;
    line-height: 40px;
    color: #fff;
    background-color: rgb(202, 34, 5);
    z-index: 100;
  }
  .nav h2{
    flex: 1;
    text-align: center;
  }
  .nav-icon:last-child{
    margin-left: 20px;
  }
  .rank-wrapper{
    background-color: #fff;
  }
  .rank-info{
    position: relative;
    width: 100%;
    height: 310px;
  }
  .rank-img{
    width: 100%;
    height: 310px;
  }
  .details{
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 30px;
    padding: 0 10px;
    box-sizing: border-box;
    width: 100%;
    font-size: 20px;
    color: #fff;
  }
  .detail{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .detail i{
    margin-bottom: 5px;
    font-size: 25px;
  }
  .playlist-wrapper{
    position: relative;
    top: -10px;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
  }
</style>

<template>
  <div class="rank-detail">
    <header class="nav">
      <i class="nav-icon iconfont icon-xiangyou" @click="back"></i>
      <h2>{{title}}</h2>
    </header>
    <div class="rank-wrapper">
      <div class="song-list-container">
        <div class="rank-info">
          <img class="rank-img" :src="rankDetail.imgUrl" alt="">
          <ul class="details">
            <li class="detail">
              <i class="iconfont icon-119"></i>
              <span>{{rankDetail.commentCount}}万</span>
            </li>
            <li class="detail">
              <i class="iconfont icon-toutiaofenxiang"></i>
              <span>{{rankDetail.shareCount}}</span>
            </li>
            <li class="detail">
              <i class="iconfont icon-xiazai"></i>
              <span>下载</span>
            </li>
            <li class="detail">
              <i class="iconfont icon-ic_duoxuan"></i>
              <span>多选</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="playlist-wrapper" :class="{isFixed:isFix}">
        <playlist :subCount="rankDetail.subCount" :num="2"></playlist>
      </div>
    </div>
  </div>
</template>

<script>
import Playlist from '@/public/Playlist'
import {getData} from '@/common/js/ajax'
import {createSong} from '@/common/js/song'
import {mapGetters, mapMutations} from 'vuex'

export default {
  data () {
    return {
      url: '',
      title: '',
      songScroll: null,
      rankDetail: {},
      scrollY: '',
      isFix: false
    }
  },
  components: {
    Playlist
  },
  created () {
  },
  mounted () {
    this.title = this.$route.query.title
    this._getRankDetail(this.$route.params.id)
  },
  methods: {
    back () {
      this.$router.back()
    },
    toFixed (num, n) {
      if (num < 10000) {
        return num
      } else {
        return (num / 10000).toFixed(n)
      }
    },
    _getRankDetail (id) {
      switch (this.title) {
        case '排行榜':
          this.url = '/top/list?idx='
          break
        case '歌单':
          this.url = '/playlist/detail?id='
          break
      }
      let temUrl = this.url + id
      let that = this
      getData(temUrl).then((res) => {
        let playlist = res.data.playlist
        let count = that.toFixed(playlist.commentCount, 1)
        let subCount = that.toFixed(playlist.subscribedCount, 1)
        let songs = createSong(playlist)
        that.setPlaylist(songs)
        that.rankDetail = {
          name: playlist.name,
          imgUrl: playlist.coverImgUrl,
          commentCount: count,
          shareCount: playlist.shareCount,
          subCount: subCount
        }
      })
    },
    moveToSong (id) {
      this.$router.push({
        path: `/music/${id}`
      })
    },
    ...mapMutations(['setPlaylist'])
  },
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  watch: {
    $route (newRoute) {
      if (newRoute.name === 'detail') {
        this.title = this.$route.query.title
        this._getRankDetail(this.$route.params.id)
      }
    }
  }
}
</script>
