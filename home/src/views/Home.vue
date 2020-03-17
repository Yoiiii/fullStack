<template>
  <div class="home">
    <img class="home-logo" alt="Vue logo" src="../assets/home-logo.jpg">
    <HelloWorld msg="Welcome to My WebSite"/>
    <div id="live2d-widget"><canvas id="live2dcanvas" width="300" height="600" style="position: fixed; opacity: 0.7; right: 0px; bottom: -20px; z-index: 99999; pointer-events: none; border: 1px dashed rgb(204, 204, 204);"></canvas></div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/live2d-widget@3.0.4/lib/L2Dwidget.min.js"></script>
<script type="text/javascript">
L2Dwidget.init();
</script>
<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style >
  .home-logo {
    width: 120px;
    height: auto;
  }
</style>
