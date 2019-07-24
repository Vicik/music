<style scoped>
.container {
  font-size: 14px;
}
.info {
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}
.info-icon {
  margin-bottom: 10px;
  position: relative;
  width: 56px;
  height: 56px;
  line-height: 56px;
  text-align: center;
  border-radius: 50%;
  background-color: #f00;
}
.info-icon i {
  font-size: 30px;
  color: #fff;
}
.info-text {
  position: absolute;
  top: 5px;
  left: 50%;
  margin-left: -4px;
  color: #f00;
}
.carousel-container {
  padding: 10px;
  margin-top: 60px;
  position: relative;
}
.dot-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -50px;
  display: flex;
  justify-content: space-between;
  width: 100px;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #333;
}
.active {
  background-color: #eee;
}
.recommend-containr{
  padding: 0 10px;
}
</style>

<template>
  <div class="container">
    <div class="headers-container">
      <headers iconType='icon-icons64x6441' :inputShow="true" :text="false" :trends="false"></headers>
    </div>
    <div class="carousel-container">
      <carousel :carImgs="imgUrl"></carousel>
      <ul class="dot-container">
        <li v-for="i in 9" :key="i" class="dot" :class="{'active': (i-1)===mark}"></li>
      </ul>
    </div>
    <div class="recommend-containr">
      <recommend type="歌单" title="推荐歌单" square="歌单广场" :lists="songLists"></recommend>
    </div>
  </div>
</template>

<script>
import Carousel from '../public/Carousel'
import Headers from '../public/Headers'
import Icon from '../public/Icon'
import Recommend from '../public/Recommend'
import Lines from '../public/Lines'
import {getData} from '@/common/js/ajax'
export default {
  data () {
    return {
      imgs: [],
      mark: 0,
      songLists: []
    }
  },
  computed: {
    date () {
      var time = new Date()
      return time.getDate()
    },
    imgUrl () {
      var array = []
      this.imgs.map(value => {
        array.push(value.imgUrl)
      })
      return array
    }
  },
  methods: {
    autoPlay () {
      this.mark++
      if (this.mark === 9) {
        this.mark = 0
      }
    },
    play () {
      setInterval(this.autoPlay, 2500)
    },
    _getBanner () {
      var that = this
      getData('/banner').then(function (res) {
        res.data.banners.map(value => {
          that.imgs.push({
            imgUrl: value.imageUrl,
            id: value.targetId
          })
        })
      })
    },
    _getRecommend () {
      var that = this
      getData('/personalized').then(function (res) {
        var result = res.data.result.splice(0, 6)
        result.map(value => {
          that.songLists.push({
            id: value.id,
            name: value.name,
            picUrl: value.picUrl,
            playCount: Math.ceil(value.playCount / 10000) + '万',
            type: value.type
          })
        })
      })
    }
  },
  mounted () {
    this.play()
    this._getBanner()
    this._getRecommend()
  },
  components: {
    Carousel,
    Headers,
    Icon,
    Recommend,
    Lines
  }
}
</script>
