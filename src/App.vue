<style scoped>
</style>

<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <tab></tab>
  </div>
</template>

<script>
import Tab from './public/Tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>
