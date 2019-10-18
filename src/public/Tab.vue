<style scoped>
.tab {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  background-color: #eee;
  z-index: 11;
}
.footer a{
  color: #666;
}
.icon{
  display: block;
  margin-bottom: 5px;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  border-radius: 50%;
  font-size: 28px;
  background-color: transparent;
}
.router-link-active {
  color: #f00;
}
.router-link-active .icon{
  background-color: #f00;
  color: #fff;
}
.router-link-exact-active.router-link-active{
  color: #f00;
}
.router-link-exact-active.router-link-active .icon{
  background-color: #f00;
  color: #fff;
}
</style>

<template>
  <div class="tab">
      <router-link to="/index">
        <i class="iconfont icon-wangyiyunyinlezizhi-copy icon"></i>
        <span>发现</span>
      </router-link>
      <router-link to="/rankList">
        <i class="iconfont icon-paihangbang--- icon"></i>
        <span>排行</span>
      </router-link>
      <router-link to="/personal">
        <i class="iconfont icon-yinyuered icon"></i>
        <span>我的</span>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {}
  }
}
</script>
