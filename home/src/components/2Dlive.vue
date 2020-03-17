<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      本站用于编程技术交流分享
    </p>
    <h3>项目</h3>
    <ul>
      <li><a href="http://shawyoi.cn/web" target="_blank" rel="noopener">明日方舟资料站(施工中)</a></li>
      <li><a href="http://shawyoi.cn/admin" target="_blank" rel="noopener">明日方舟资料站后台(施工中)</a></li>
    </ul>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/live2d-widget@3.0.4/lib/L2Dwidget.min.js"></script>
<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
