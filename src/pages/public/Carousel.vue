<style scoped>
  .carousel{
    overflow: hidden;
  }
  .ad-img{
    width: 100%;
    height: 160px;
  }
</style>

<template>
  <div class="carousel">
    <img v-for="(img, i) in carImgs" :key="i" :src="img" class="ad-img" v-show="i===mark">
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
