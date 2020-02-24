<template>
  <div>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide>
      <img class="w-100" src="../assets/images/black.png">
    </swiper-slide>
    <swiper-slide>
      <img  class="w-100" src="../assets/images/black.png">
    </swiper-slide>
        <swiper-slide>
      <img  class="w-100" src="../assets/images/black.png">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination pagination-home text-right"  slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
export default {
  data(){
    return{
      swiperOption: {
          pagination: {
            el: '.pagination-home'
          }
        },
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/variables';
.pagination-home{
  .swiper-pagination-bullet{
    background: #fff;
  }
  &.swiper-pagination-bullet-active{
    background: map-get($colors,'info');
  }
}
  
</style>