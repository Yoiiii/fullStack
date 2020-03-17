<template>
  <div class="home">
    <img class="home-logo" alt="Vue logo" src="../assets/home-logo.jpg">
    <HelloWorld msg="Welcome to My WebSite"/>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
}
</script>
<style >
  .home-logo {
    width: 120px;
    height: auto;
  }
</style>
