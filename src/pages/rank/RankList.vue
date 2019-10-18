<style scoped>
  .rank-container{
    padding: 0 10px;
  }
</style>

<template>
  <div class="container">
    <div class="headers-container">
      <m-head iconType='icon-shipin' :inputShow="true" :text="false" :trends="false"></m-head>
    </div>
    <div class="rank-container">
      <rank v-for="(rank, i) in rankLists" :key="i" :rankList="rank" @moveToDetail="_getDetail"></rank>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
import MHead from '@/public/MHead'
import Rank from '@/public/Rank'
import {getData} from '@/common/js/ajax'
export default {
  data () {
    return {
      rankLists: [],
      top_list: {
        0: 3779629,
        1: 3778678,
        2: 2884035,
        3: 19723756
      }
    }
  },
  components: {
    MHead,
    Rank
  },
  methods: {
    _getRank () {
      var that = this
      getData('/toplist/detail').then(function (res) {
        var result = res.data.list.slice(0, 4)
        result.map(value => {
          var tracks = value.tracks
          var track = []
          tracks.map(item => {
            track.push(item.first + ' - ' + item.second)
          })
          that.rankLists.push({
            id: value.id,
            name: value.name,
            imgUrl: value.coverImgUrl,
            update: value.updateFrequency,
            tracks: track
          })
        })
      })
    },
    _getDetail (id) {
      for (var key in this.top_list) {
        if (this.top_list[key] === id) {
          this.$router.push({
            path: `/detail/${key}`,
            query: { title: '排行榜' }
          })
        }
      }
    }
  },
  created () {
    this._getRank()
  }
}
</script>
