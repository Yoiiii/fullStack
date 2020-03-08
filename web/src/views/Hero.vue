<template>
<div class="page-hero" v-if="model"> 
      <div class="topbar bg-black py-2 text-white px-3 d-flex ai-center">
      <img class="bg-white" src="../assets/logo.png" height="30" />
      <div class="px-2 flex-grow-1">
        <span class="text-white mx-3">明日方舟</span>
        <span class="text-gary-1 fs-xxs">攻略站</span>
      </div>
      <router-link to="/" tag="div"  class="">更多英雄 &gt;</router-link>
    </div>
  <h1>{{model.name}}</h1>
</div>
</template>
<script>
export default {
  props:{
    id:{required:true}
  },
  data() {
    return {
      model:null
    }
  },
  watch: {
    id:'fetch',
    // id(){
    //   this.fetch()
    // }
  },
  methods: {
    async fetch(){
      const res=await this.$http.get(`heroes/${this.id}`) 
      this.model=res.data
    }
  },
  created() {
    this.fetch()
  },
}
</script>
<style lang="scss">
</style>