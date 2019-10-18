<style scoped>
.search{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 15;
}
.hotList{
  padding: 10px;
}
.hotList .title{
  font-size: 18px;
  color: #000;
  font-weight: bold;
}
.list{
  padding-top: 10px;
}
.list li{
  margin-left: 10px;
  margin-bottom: 15px;
  overflow: hidden;
  font-size: 16px;
}
.list .rank,.list .name{
  float: left;
}
.list .rank{
  color: #999;
}
.list .name{
  margin-left: 5px;
}
.list .active{
  color: #f00;
}
</style>

<template>
  <div class="search">
    <search-head></search-head>
    <div class="hotList">
      <h4 class="title">热搜榜</h4>
      <ul class="list">
        <li v-for="(list, index) in hotLists" :key="index">
          <span :class="(index + 1)<4?'active':''" class="rank">{{index + 1}}</span>
          <p class="name">{{list.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchHead from '@/public/SearchHead'
import {getData} from '@/common/js/ajax'
export default {
  data () {
    return {
      hotLists: []
    }
  },
  created () {
    this._getHot()
  },
  methods: {
    _getHot () {
      getData('/search/hot/detail').then((res) => {
        var songs = res.data.result.hots
        songs.map((song) => {
          this.hotLists.push({
            name: song.first
          })
        })
      })
    }
  },
  components: {
    SearchHead
  }
}
</script>
