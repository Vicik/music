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
  position: relative;
}
.recommend-containr{
  padding: 0 10px;
}
</style>

<template>
  <div class="container">
    <div class="head-container">
      <m-head iconType='icon-icons64x6441' :inputShow="true" :text="false" :trends="false"></m-head>
    </div>
    <div class="carousel-container">
      <carousel :banner="imgUrl"></carousel>
    </div>
    <div class="recommend-containr">
      <recommend title="推荐歌单" :lists="songLists"></recommend>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Carousel from '@/public/Carousel'
import MHead from '@/public/MHead'
import Recommend from '@/public/Recommend'
import Lines from '@/public/Lines'
import {getData} from '@/common/js/ajax'
export default {
  data () {
    return {
      imgs: [],
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
    // this.play()
    this._getBanner()
    this._getRecommend()
  },
  components: {
    Carousel,
    MHead,
    Recommend,
    Lines
  }
}
</script>
