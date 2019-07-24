<style scoped>
  .music{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 10px;
    width: 100%;
    height: 100vh;
    background-color: #000;
    z-index: 99;
  }
  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    text-align: center;
    color: #fff;
  }
  .name{
    margin: 4px;
    font-size: 18px;
    width: 200px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .author{
    font-size: 14px;
  }
  .cd{
    margin: 0 auto;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    text-align: center;
    border: 40px solid #000;
    box-shadow: -10px 0px 10px red,0px -10px 10px #fff, 10px 0px 10px green,0px 10px 10px blue;
  }
  .lyric-list{
    margin: 0 auto;
    width: 90%;
    height: 400px;
    overflow: hidden;
  }
  .currentLyric{
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
  }
  .text{
    margin: 8px 0;
  }
  .cd img{
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
  @media screen and (max-width: 375px){
    .cd{
      width: 200px;
      height: 200px;
    }
    .lyric-list{
      height: 300px;
    }
    .cd img{
      width: 200px;
      height: 200px;
    }
  }
  .current{
    color: #fff;
  }
  .play{
    padding-bottom: 10px;
    font-size: 30px;
    color: #fff;
  }
  .msg,.player{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
  }
  .progress{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    font-size: 14px;
    opacity: 0.6;
    font-weight: normal;
  }
  .bar{
    flex: 1;
    margin: 0 3px;
    position: relative;
    height: 2px;
    border-radius: 1px;
    background: #fff;
  }
  .inner{
    height: 2px;
    background: lightseagreen;
  }
  .circle{
    position: absolute;
    top: -4px;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: lightseagreen;
  }
  .icon{
    font-size: 25px;
  }
  .icon-s{
    font-size: 40px;
  }
  .audio{
    display: none;
  }
  .playlist-wrapper{
    position: fixed;
    top: 30vh;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
  }
  .btn{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #fff;
    text-align: center;
    border-top: 1px solid #eee;
    z-index: 20;
  }
</style>

<template>
  <div class="music">
    <div class="header">
      <i class="nav-icon iconfont icon-xiangyou" @click="back"></i>
      <div class="title">
        <p class="name">{{currentSong.title}}</p>
        <span class="author">{{currentSong.author}} ></span>
      </div>
      <i class="iconfont icon-toutiaofenxiang"></i>
    </div>
    <div class="middle" @click="changeMiddle">
      <transition name="middleL">
        <div class="middle-l" v-show="currentShow === 'cd'">
          <div class="cd-wrapper">
            <div class="cd">
              <img :src="currentSong.imgUrl" alt="" srcset="">
            </div>
          </div>
        </div>
      </transition>
      <transition name="middleR">
        <div ref="lyricList" v-show="currentShow === 'lyric'" class="lyric-list">
          <div>
            <div class="currentLyric" v-if="currentLyric">
              <p ref="lyricLine" class="text" :class="{'current': currentLineNum === index}"
                v-for="(line, index) in currentLyric.lines" :key="line.key">
                {{line.txt}}
              </p>
            </div>
            <p class="no-lyric" v-if="currentLyric === null">{{upDatecurrentLyric}}</p>
          </div>
        </div>
      </transition>
    </div>
    <div class="audio">
      <audio ref="audio" @timeupdate="updateTime"></audio>
    </div>
    <div class="play">
      <div class="msg">
        <i class="iconfont icon-iconfontzan icon"></i>
        <i class="iconfont icon-xiazai icon"></i>
        <i class="iconfont icon-119 icon"></i>
        <i class="iconfont icon-dian1 icon"></i>
      </div>
      <div class="progress">
        <div class="start">{{currentTime | format}}</div>
        <div class="bar" ref="progressBar">
          <div class="inner" ref="inner" :style="{width: barWidth}"></div>
          <div class="circle" ref="progressCircle"
          @touchstart.prevent="progressTouchStart"
          @touchmove.prevent="progressTouchMove"
          @touchend.prevent="progressTouchEnd">
          </div>
        </div>
        <div class="end">{{duration | format}}</div>
      </div>
      <div class="player">
        <i class="iconfont icon-inturn icon"></i>
        <i class="iconfont icon-icon_gequxiangqing_s icon" @click="pre"></i>
        <i class="iconfont icon icon-s" :class="{
          'icon-zanting':paused,
          'icon-shipin-copy': !paused
          }" @click="playSong"></i>
        <i class="iconfont icon-icon_gequxiangqing_x icon" @click="next"></i>
        <i class="iconfont icon-bofangliebiao icon" @click="show = !show"></i>
      </div>
    </div>
    <div class="playlist-wrapper" v-show="show">
      <playlist :num="1"></playlist>
      <div class="btn" @click="show = !show">关闭</div>
    </div>
  </div>
</template>

<script>
import Playlist from '../public/Playlist'
import {getData} from '@/common/js/ajax'
import BScroll from 'better-scroll'
import {mapGetters, mapMutations} from 'vuex'
import Lyric from 'lyric-parser'
const progressBtnWidth = 10

export default {
  data () {
    return {
      show: false,
      song: {},
      url: '',
      lyricScroll: null,
      currentTime: '00:00',
      duration: '',
      barWidth: '0',
      currentShow: 'cd', // 保存显示cd还是歌词
      currentLyric: null, // 保存歌词信息
      noLyric: false, // 是否有歌词
      currentLineNum: 0,
      paused: false,
      ended: false,
      touch: {
        initiated: true,
        startX: 0,
        left: 0,
        percent: 0 // 移动百分比
      },
      id: '' // 保存歌曲id
    }
  },
  created () {
    this._play(this.$route.params.id)
    this._getLyric(this.$route.params.id)
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  computed: {
    ...mapGetters([
      'playlist',
      'currentSong',
      'currentIndex'
    ]),
    upDatecurrentLyric () {
      if (this.noLyric) {
        return '暂无歌词'
      }
      if (!this.noLyric) {
        return '歌词加载中'
      }
    }
  },
  filters: {
    format (time) {
      let interval = time | 0
      let minute = interval / 60 | 0
      let second = interval % 60
      if (second < 10) {
        second = '0' + second
      }
      return minute + ':' + second
    }
  },
  methods: {
    ...mapMutations(['setCurrentIndex', 'getSong']),
    _initScroll () {
      if (!this.$refs.lyricList) {
        return
      }
      this.lyricScroll = new BScroll(this.$refs.lyricList, {
        click: true,
        protoType: 3
      })
    },
    updateTime (e) {
      this.currentTime = e.target.currentTime
      let percent = this.currentTime / this.duration
      let offsetWidth = (this.$refs.progressBar.clientWidth - progressBtnWidth) * percent
      this._offset(offsetWidth)
    },
    back () {
      this.$router.back()
    },
    _play (id) {
      let temUrl = '/song/url?id=' + id
      this.id = id
      getData(temUrl).then((res) => {
        this.url = res.data.data[0].url
      })
    },
    _getLyric (id) {
      if (this.currentLyric) {
        this.currentLyric.stop()
        this.currentLyric = null
      }
      this.noLyric = false
      getData('/lyric?id=' + id).then((res) => {
        let lyricStr = res.data.lrc.lyric
        this.currentLyric = new Lyric(lyricStr, this.handleLyric)
        if (!this.paused) {
          this.currentLyric.stop()
          // 歌词重载以后 高亮行设置为 0
          this.currentLineNum = 0
          this.lyricScroll.scrollTo(0, 0, 1000)
        } else {
          this.currentLyric.play()
        }
      }).catch(() => {
        this.currentLyric = null
        this.noLyric = true
        this.currentLineNum = 0
      })
    },
    handleLyric ({lineNum, txt}) {
      this.currentLineNum = lineNum
      if (lineNum > 5) {
        let lineEl = this.$refs.lyricLine[lineNum - 5]
        this.lyricScroll.scrollToElement(lineEl, 1000)
      } else {
        this.lyricScroll.scrollTo(0, 0, 1000)
      }
    },
    playSong () {
      if (this.ended) {
        this.ended = false
        this.barWidth = '0'
        this.$refs.progressCircle.style.transform = 'translate3d(0, 0, 0)'
      }
      this.paused = this.$refs.audio.paused
      if (this.paused) {
        this.$refs.audio.play()
        this.currentLyric.play()
      } else {
        this.$refs.audio.pause()
        this.currentLyric.stop()
      }
    },
    _triggerPercent () {
      const width = this.$refs.progressBar.clientWidth - progressBtnWidth
      this.touch.percent = this.$refs.inner.clientWidth / width
    },
    _offset (offsetWidth) {
      this.barWidth = `${offsetWidth}px`
      this.$refs.progressCircle.style.transform = `translate3d(${offsetWidth}px, 0, 0)`
    },
    progressTouchStart (e) {
      this.touch.initiated = true
      this.touch.startX = e.touches[0].pageX
      this.touch.left = this.$refs.progressBar.clientWidth
    },
    progressTouchMove (e) {
      if (!this.touch.initiated) {
        return
      }
      this._triggerPercent()
      let deltaX = e.touches[0].pageX - this.touch.startX
      let offsetWidth = Math.min(Math.min(this.$refs.progressBar.clientWidth - progressBtnWidth, Math.max(0, this.touch.left + deltaX)))
      this._offset(offsetWidth)
    },
    progressTouchEnd (e) {
      this.touch.initiated = false
      let width = this.$refs.progressBar.clientWidth - progressBtnWidth
      let percent = this.$refs.inner.clientWidth / width
      this.$refs.audio.currentTime = this.duration * percent
      let totalWWidth = this.$refs.inner.clientWidth + progressBtnWidth
      if (totalWWidth === this.$refs.progressBar.clientWidth) {
        this.paused = false
        this.ended = this.$refs.audio.ended
      }
    },
    pre () {
      this.paused = false
      let index = this.currentIndex - 1
      if (index === -1) {
        index = this.playlist.length - 1
      }
      this.setCurrentIndex(index)
      this.getSong(index)
      this.id = this.currentSong.id
      this._play(this.id)
      this._getLyric(this.id)
    },
    next () {
      this.paused = false
      let index = this.currentIndex + 1
      if (index === this.playlist.length) {
        index = 0
      }
      this.setCurrentIndex(index)
      this.getSong(index)
      this.id = this.currentSong.id
      this._play(this.id)
      this._getLyric(this.id)
    },
    changeMiddle () {
      if (this.currentShow === 'cd') {
        this.currentShow = 'lyric'
      } else {
        this.currentShow = 'cd'
      }
    }
  },
  watch: {
    url (newUrl) {
      this.$refs.audio.src = newUrl
      let stop = setInterval(() => {
        this.duration = this.$refs.audio.duration
        if (this.duration) {
          clearInterval(stop)
        }
      }, 150)
    }
  },
  components: {
    Playlist
  }
}
</script>
