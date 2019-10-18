<style scoped>
  .album{
    position: relative;
    margin-bottom: 10px;
    font-size: 0;
  }
  .song-img{
    width: 120px;
    height: 120px;
    border-radius: 4px;
  }
  .play{
    position: absolute;
    right: 10px;
    top: 5px;
    font-size: 14px;
    color: #fff;
  }
  .title{
    margin-top: 5px;
    width: 112px;
    line-height: 18px;
    font-size: 14px;
  }
</style>

<template>
  <div class="album" @click="moveToDetail(album.id)">
    <img :src="album.picUrl" class="song-img">
    <p class="title">{{album.name}}</p>
    <div class="play" v-if="album.playCount">
      <i class="iconfont icon-sanjiaoxing"></i>
      <span>{{album.playCount}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'album',
  props: {
    album: {
      type: Object
    }
  },
  methods: {
    moveToDetail (id) {
      this.$emit('toDetail', id)
    }
  }
}
</script>
