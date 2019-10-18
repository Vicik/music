<style scoped>
  .rank{
    display: flex;
    margin-top: 10px;
    width: 100%;
  }
  .rank-img,.img{
    position: relative;
    flex: 0 0 120px;
    width: 120px;
    border-radius: 5px;
  }
  .update{
    position: absolute;
    bottom: 5px;
    left: 5px;
    color: #fff;
    font-size: 14px;
  }
  .tracks{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 10px;
    color: #333;
    overflow: hidden;
  }
  .track{
    padding: 0 0 10px 10px;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }
</style>

<template>
  <div class="rank" @click="getId(rankList.id)">
    <div class="rank-img">
      <img :src="rankList.imgUrl" class="img">
      <p class="update">{{rankList.update}}</p>
    </div>
    <ul class="tracks">
      <li class="track" v-for="(item, i) in rankList.tracks" :key="i">{{(i + 1) + '. ' + item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    rankList: {
      type: Object
    }
  },
  methods: {
    getId (id) {
      this.$emit('moveToDetail', id)
    }
  }
}
</script>
