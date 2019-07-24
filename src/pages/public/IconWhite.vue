<style scoped>
  .icon-white{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 10px;
    color: #ccc;
    letter-spacing: 2px;
  }
  .icon-white .icon{
    font-size: 28px;
    color: #f00;
  }
  .txt{
    margin: 8px 0 5px 0;
    font-size: 18px;
    color: #000;
  }
</style>

<template>
  <div class="icon-white">
    <i class="iconfont icon" :class="icons.icon"></i>
    <span class="txt">{{icons.txt}}</span>
    <span>{{icons.smallTxt}}</span>
  </div>
</template>

<script>
export default {
  props: ['icons']
}
</script>
