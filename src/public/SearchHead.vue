<style scoped>
  .search-head {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    font-size: 24px;
    text-align: left;
    box-sizing: border-box;
    background-color: #fff;
  }
  .search {
    padding-left: 10px;
    margin-right: 10px;
    flex: 1;
    display: flex;
    height: 30px;
    outline: none;
    background-color: #eee;
    border-radius: 15px;
  }
  .icon {
    flex: 0 0 40px;
    font-size: 24px;
  }
  .search .input {
    vertical-align: top;
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
    font-size: 16px;
  }
  .search i {
    font-size: 28px;
  }
  .search-head span{
      font-size: 14px;
      color: #333;
  }
</style>

<template>
  <div class="search-head">
    <div class="search">
      <i class="iconfont icon-search icon"></i>
      <input type="text" class="input" placeholder="猜你喜欢">
    </div>
    <span @click="back">取消</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
