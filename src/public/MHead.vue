<style scoped>
  .m-head {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    line-height: 44px;
    font-size: 24px;
    text-align: left;
    background-color: #fff;
  }
  .search {
    flex: 1;
    margin-right: 5px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    outline: none;
    background-color: #eee;
    border-radius: 15px;
  }
  .icon {
    widows: 40px;
    font-size: 20px;
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
    <div class="search" v-if="inputShow" @click="moveToSearch">
      <i class="iconfont icon-search"></i>
      <input type="text" class="input" placeholder="猜你喜欢">
    </div>
    <span v-if="text">我的音乐</span>
    <i class="icon iconfont icon-weibiaoti-" @click="showMusic"></i>
  </div>
</template>

<script>
export default {
  props: ['iconType', 'inputShow', 'text'],
  data () {
    return {
      activeShow: true
    }
  },
  methods: {
    moveToSearch () {
      this.$router.push({
        path: '/search'
      })
    },
    showMusic () {
      this.$router.push({
        path: '/music/1397317478'
      })
    }
  }
}
</script>
