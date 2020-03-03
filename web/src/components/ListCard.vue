<template>
  <m-card :icon="icon" :title="title">
    <div class="nav jc-between">
      <div class="nav-item" :class="{active: active===i}" 
      v-for="(category,i) in categories" :key="i" 
      @click="active=i">
        <div class="nav-link">{{categories.name}}</div>
      </div>
    </div>
    <swiper class="mt-3">
      <swiper-slide v-for="(category,i) in categories" :key="i">
          <slot name="items" :category="category"> </slot>
      </swiper-slide>
    </swiper>
  </m-card>
</template>
<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    categories: { type: Array, required: true }
  },
  data(){
      return{
          active:0,
      }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/variables";
.pagination-home {
  .swiper-pagination-bullet {
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
  }
  &.swiper-pagination-bullet-active {
    background: map-get($colors, "info");
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>