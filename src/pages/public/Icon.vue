<style scoped>
  .icon{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .info-icon {
    margin-bottom: 10px;
    position: relative;
    width: 56px;
    height: 56px;
    line-height: 56px;
    border-radius: 50%;
    font-size: 14px;
    background-color: #f00;
  }
  .icon-item{
    font-size: 30px;
    color: #fff;
  }
  .info-text {
    position: absolute;
    top: 5px;
    left: 50%;
    margin-left: -4px;
    color: #f00;
  }
</style>

<template>
  <div class="icon">
    <div class="info-icon">
      <i class="iconfont icon-item" :class="icon"></i>
      <span class="info-text">{{pTxt}}</span>
    </div>
    <span>{{txt}}</span>
  </div>
</template>
