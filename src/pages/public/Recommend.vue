<style scoped>
  .recommend {
    padding: 20px 0;
  }
  .recommend-head {
    align-items: left;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
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
      <p>{{title}}</p>
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
