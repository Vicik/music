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
    <div class="container">
      <album v-for="(item, i) in lists" :key="i" :album="item" @toDetail="moveToDetail"></album>
    </div>
  </div>
</template>

<script>
import Album from '@/public/Album'
export default {
  props: {
    lists: {
      type: Array
    },
    title: {
      type: String
    }
  },
  data () {
    return {
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
    Album
  }
}
</script>
