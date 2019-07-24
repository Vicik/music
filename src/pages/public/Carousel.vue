<style scoped>
  .carousel{
    overflow: hidden;
  }
  .ad-img{
    width: 100%;
    height: 160px;
  }
  .dot-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -50px;
  display: flex;
  justify-content: space-between;
  width: 100px;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #333;
}
.active {
  background-color: #eee;
}
</style>

<template>
  <div class="carousel">
    <img v-for="(img, i) in carImgs" :key="i" :src="img" class="ad-img" v-show="i===mark">
    <ul class="dot-container">
      <li v-for="i in 9" :key="i" class="dot" :class="{'active': (i-1)===mark}"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['carImgs'],
  data () {
    return {
      mark: 0
    }
  },
  methods: {
    autoPlay () {
      this.mark++
      if (this.mark === 9) {
        this.mark = 0
      }
    },
    play () {
      setInterval(this.autoPlay, 2500)
    }
  },
  created () {
    this.play()
  }
}
</script>
