<style scoped>
  .recommend {
    padding: 20px 0;
  }
  .recommend-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .recommend-title {
    font-size: 20px;
    font-weight: bold;
  }
  .square {
    padding: 4px 12px;
    border: 1px solid #eee;
    border-radius: 15px;
  }
  .container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>

<template>
  <div class="recommend">
    <div class="recommend-head">
      <p class="recommend-title">{{title}}</p>
      <span class="square">{{square}}</span>
    </div>
    <div class="container" v-if="show">
      <song-sheet v-for="(item, i) in lists" :key="i" :list="item" @toDetail="moveToDetail"></song-sheet>
    </div>
    <div class="container" v-if="!show">
      <album v-for="(item, i) in lists" :key="i" :album="item"></album>
    </div>
  </div>
</template>

<script>
import SongSheet from '../public/SongSheet'
import Album from '../public/Album'
export default {
  props: {
    lists: {
      type: Array
    },
    title: {
      type: String
    },
    square: {
      type: String
    },
    type: {
      type: String
    }
  },
  data () {
    return {
      show: true
    }
  },
  created () {
    switch (this.type) {
      case '专辑':
        this.show = false
        break
      case '歌单':
        this.show = true
        break
      case '新歌':
        this.show = false
        break
    }
  },
  methods: {
    moveToDetail (id) {
      this.$router.push({
        path: `/detail/${id}`,
        query: { title: '歌单' }
      })
    }
  },
  components: {
    SongSheet,
    Album
  }
}
</script>
