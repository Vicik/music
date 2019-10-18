<style scoped>
  .m-head {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 100%; */
    height: 30px;
    font-size: 24px;
    text-align: left;
    box-sizing: border-box;
    background-color: #fff;
  }
  .search {
    flex: 1;
    height: 100%;
    text-align: center;
    outline: none;
    background-color: #eee;
    border-radius: 15px;
  }
  .icon {
    flex: 0 0 40px;
    font-size: 24px;
  }
  .icon:last-child {
    text-align: right;
  }
  .search .input {
    vertical-align: top;
    width: 100px;
    height: 100%;
    background-color: transparent;
    outline: none;
    font-size: 16px;
  }
  .search i {
    font-size: 28px;
  }
</style>

<template>
  <div class="m-head">
    <i class="icon iconfont" :class="iconType"></i>
    <div class="search" v-if="inputShow">
      <i class="iconfont icon-search"></i>
      <input type="text" class="input" placeholder="猜你喜欢">
    </div>
    <span v-if="text">我的音乐</span>
    <i class="icon iconfont icon-weibiaoti-"></i>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: ['iconType', 'inputShow', 'text', 'trends'],
  data () {
    return {
      activeShow: true
    }
  },
  computed: {
    ...mapGetters(['showMusic'])
  }
}
</script>
