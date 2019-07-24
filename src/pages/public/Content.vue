<style scoped>
  .content{
    width: 100%;
    font-size: 0;
    /* color: #333; */
  }
  .content-container{
    position: relative;
    background-color: #eee;
    border-radius: 10px;
  }
  .content-img{
    width: 100%;
    border-radius: 10px;
    height: 250px;
  }
  .content-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
  }
  .title{
    margin-right: 5px;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    color: #000;
    font-weight: 700;
    font-size: 16px;
  }
  .avatar{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .play-time{
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 220px;
    left: 0;
    width: 100%;
    color: #fff;
    font-size: 16px;
  }
  .comment{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    font-size: 16px;
  }
  .comment-txt{
    margin-left: 5px;
  }
  .comment-icon{
    margin-left: 20px;
  }
</style>

<template>
  <div class="content">
    <div class="content-container">
      <img src="../../../static/img/ad2.jpg" class="content-img">
      <div class="content-info">
        <p class="title">普通人带来的生化武器，这威力很不一般啊，让人震撼</p>
        <img src="../../../static/img/ad9.jpg" class="avatar">
      </div>
      <div class="play-time">
        <span>
          <i class="iconfont icon-sanjiaoxing"></i>
          <span>37.6亿</span>
        </span>
        <span>
          <i class="iconfont icon-weibiaoti-"></i>
          <span>00:41</span>
        </span>
      </div>
    </div>
    <div class="comment">
      <div class="comment-info">
        <i class="iconfont icon-dianzan"></i>
        <span class="comment-txt">2382</span>
        <i class="iconfont icon-119 comment-icon"></i>
        <span class="comment-txt">200</span>
      </div>
      <i class="iconfont icon-dian1"></i>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
