<template>
  <div class="page-hero" v-if="model">
    <!-- 顶栏 -->
    <div class="topbar bg-black py-2 text-white px-3 d-flex ai-center">
      <img class="bg-white" src="../assets/logo.png" height="30" />
      <div class="px-2 flex-grow-1">
        <span class="text-white mx-3">明日方舟</span>
        <span class="text-gary-1 fs-xxs">攻略站</span>
      </div>
      <router-link to="/" tag="div" class>更多英雄 &gt;</router-link>
    </div>
    <!-- 原画 -->
    <div class="top" :style="{'background-image':`url(${model.banner})`}">
      <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div class="fs-sm">{{model.categories.map(v=> v.name).join('/')}}</div>
        <div class="d-flex jc-between pt-2">
          <div class="scores d-flex ai-center" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-blue-1">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{model.scores.survive}}</span>
          </div>
          <router-link to="/" tag="span" class="text-grey fs-sm">
            皮肤:2 &gt;
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    };
  },
  watch: {
    id: "fetch"
    // id(){
    //   this.fetch()
    // }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>
<style lang="scss">
.page-hero {
  .top {
    height: 50vw;
    background: #fff top center;
    background-size: auto 100%;
  }
  .info{
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
    .scores{
      .badge{
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 0.9rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.6rem;
        border: 1px solid rgba(255,255,255,0.2);
      }
    }
  }
}
</style>