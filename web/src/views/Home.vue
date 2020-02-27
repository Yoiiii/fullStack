<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" data-swiper-autoplay="2000">
      <!-- slides -->
      <swiper-slide>
        <img class="w-100" src="../assets/images/08072d720562444b230bb472bdb62534.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/e3ce1d42d93eb45414322e3634a04598.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/e38db707a96d8458101c78ecf644e467.jpeg" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end of swiper-->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10 " :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm d-flex ai-center jc-center">
        <i class="sprite sprite-arrow mr-1"></i>
        收起
      </div>
    </div>
    <!-- end of nav icons -->
    <m-card icon="cc-menu-circle" title="新闻资讯">
      <div class="nav jc-between">
        <div class="nav-item active">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">公告</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">活动</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">赛事</div>
        </div>
      </div>
      <swiper class="mt-3">
        <swiper-slide v-for="m in 5" :key="m">
          <div class="py-2" v-for="n in 5" :key="n">
            <span>新闻</span>
            <span>|</span>
            <span>2月25日全服不停机更新公告</span>
            <span>06/02</span>
          </div>
        </swiper-slide>
      </swiper>
    </m-card>
    <m-card icon="cc-menu-circle" title="英雄列表"></m-card>
    <m-card icon="cc-menu-circle" title="精彩视频"></m-card>
    <m-card icon="cc-menu-circle" title="图文攻略"></m-card>
    <m-card icon="cc-menu-circle" title="新闻资讯"></m-card>
    <p>aaaaaaaaaaaaa</p>
    <p>aaaaaaaaaaaaa</p>
    <p>aaaaaaaaaaaaa</p>
    <p>aaaaaaaaaaaaa</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      }
    };
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