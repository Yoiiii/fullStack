<template>
  <div>
    <div class="topbar bg-black py-2 text-white px-3 d-flex ai-center">
      <img class="bg-white" src="../assets/logo.png" height="30" />
      <div class="px-2 flex-grow-1">
        <div class="text-white">Vue项目</div>
        <div class="text-gary-1 fs-xxs">全栈</div>
      </div>
      <button type="button" class="btn bg-primary">立即进入</button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav d-flex text-white jc-around pb-1">
        <div class="nav-item active">
          <router-link class="nav-link" tag="div" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>