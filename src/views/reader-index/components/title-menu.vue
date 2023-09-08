<script setup>

  function handleBack() {

  }

  function handleShopCar() {

  }

  function handleMy() {
    
  }

  function handleMore() {
    
  }
</script>

<template>
  <div class="title-menu">
    <div class="menu-left" @click="handleBack">
      <span class="iconfont icon-ngp_left_back"></span>
    </div>
    <div class="menu-right">
      <div class="icon-item" @click="handleShopCar">
        <span class="iconfont icon-shopcar"></span>
      </div>
      <div class="icon-item" @click="handleMy">
        <span class="iconfont icon-wode"></span>
      </div>
      <div class="icon-item" @click="handleMore">
        <span class="iconfont icon-dot_vertical"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../../../assets/styles/global.scss';
  .title-menu{
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: px2rem(50);
    box-shadow: 0 1px 1px #afabab;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .iconfont{
      font-size: px2rem(20);
    }
    .menu-left{
      width: px2rem(100);
      margin-left: px2rem(10);
      display: flex;
      align-items: cetner;
    }
    .menu-right{
      display: flex;
      align-items: center;
      .icon-item{
        width: px2rem(40);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
