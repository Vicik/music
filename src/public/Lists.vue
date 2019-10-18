<style scoped>
  .list{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 50px;
  }
  .list-icon{
    flex: 0 0 20px;
    font-size: 20px;
  }
  .list-txt{
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    padding: 10px 0;
    font-size: 18px;
    border-bottom: 1px solid #ddd;
  }
  .list:last-child .list-txt{
    border: none;
  }
  .right{
    color: #ddd;
  }
</style>

<template>
  <div class="lists">
    <div class="list" v-for="(list, i) in lists" :key="i">
      <i class="iconfont list-icon" :class="list.lIcon"></i>
      <div class="list-txt">
        <p>{{list.listTxt}}</p>
        <div class="right" v-if="!list.slide">
          <span class="count">{{list.extra}}</span>
          <span class="right-icon">></span>
        </div>
        <div class="right" v-if="list.slide">
          <slide></slide>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slide from '@/public/Slide'
export default {
  props: ['lists'],
  components: {Slide}
}
</script>
