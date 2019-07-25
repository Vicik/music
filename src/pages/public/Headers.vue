<style scoped>
  .headers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30px;
    font-size: 24px;
    text-align: left;
    box-sizing: border-box;
  }
  .search {
    flex: 1;
    height: 100%;
    text-align: center;
    outline: none;
    background-color: #eee;
    border-radius: 15px;
  }
  .slide{
    display: flex;
    justify-content: space-around;
    width: 140px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    background-color: #ffff;
    font-size: 16px;
    color: #f00;
    border: 1px solid #f00;
  }
  .slide span{
    flex: 0 0 50%;
    height: 30px;
    border-radius: 15px;
  }
  .active{
    background-color: #f00;
    color: #fff;
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
  <div class="headers">
    <i class="icon iconfont" :class="iconType"></i>
    <div class="search" v-if="inputShow">
      <i class="iconfont icon-search"></i>
      <input type="text" class="input" placeholder="猜你喜欢">
    </div>
    <span v-if="text">我的音乐</span>
    <div class="slide" v-if="trends">
      <span :class="{'active': !activeShow}" @click.stop="change($event)">动态</span>
      <span :class="{'active': activeShow}" @click.stop="change($event)">附近</span>
    </div>
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
  },
  methods: {
    change (e) {
      if (e.target.className) {
        return
      }
      this.activeShow = !this.activeShow
    }
  }
}
</script>
