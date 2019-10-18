<style scoped>
  .slide{
    display: flex;
    justify-content: space-around;
    width: 40px;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    text-align: center;
    background-color: #ffff;
    font-size: 16px;
    color: #f00;
    border: 1px solid #ddd;
  }
  .slide span{
    flex: 0 0 50%;
    height: 20px;
    border-radius: 10px;
  }
  .active{
    background-color: rgb(255, 136, 0);
    color: #fff;
  }
</style>

<template>
  <div class="slide">
    <span :class="{'active': !activeShow}" @click.stop="change($event)"></span>
    <span :class="{'active': activeShow}" @click.stop="change($event)"></span>
  </div>
</template>

<script>
export default {
  props: ['iconType', 'inputShow', 'text', 'trends'],
  data () {
    return {
      activeShow: true
    }
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
