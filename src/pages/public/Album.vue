<style scoped>
  .album{
    margin-bottom: 20px;
    font-size: 0;
  }
  .album-img{
    width: 120px;
    height: 120px;
    border-radius: 4px;
  }
  .names,.authors{
    display: block;
    width: 120px;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
  }
  .names{
    margin: 5px 0;
    font-size: 16px;
    color: #000;
  }
  .authors{
    font-size: 14px;
    color: #ddd;
  }
</style>

<template>
  <div class="album">
    <img :src="album.picUrl" class="album-img">
    <p class="names">{{album.name}}</p>
    <span class="authors">{{album.authors}}</span>
  </div>
</template>

<script>
export default {
  props: ['album']
}
</script>
