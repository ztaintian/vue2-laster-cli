<template>
  <div class="head-bar">
    <router-link :to="toLink" v-if="toLink">
      <i class="icon iconfont icon-fanhui"></i>
    </router-link>
    <p>{{barName}}</p>
  </div>
</template>

<script>
export default {
  props: ["toLink", "barName"]
};
</script>

<style lang="stylus">
.head-bar {
  height: 40px;
  position: fixed;
  top: 0;
  width: 100%;
  left: -4px;
  padding: 0 2px;
  background: #fff;
  z-index: 999;
  border-bottom: 1px solid chuixian;

  .iconfont {
    font-size: 16px;
    position: absolute;
    top: 8px;
    left: 15px;
    color: #3b3b3b;
  }

  p {
    text-align: center;
    font-size: 16px;
    line-height: 40px;
    color: #3b3b3b;
  }
}
</style>
