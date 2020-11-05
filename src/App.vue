<template>
  <div id="app">
    <!-- <van-loading class="center" v-if="loading" color="#1989fa" /> -->
    <van-loading class="center" v-if="loading" type="spinner" color="#1989fa" />
    <router-view />
  </div>
</template>
<script>
import { Loading } from "vant";
import { mapGetters } from "vuex";

export default {
  components: {
    "van-loading": Loading,
  },
  computed: {
    ...mapGetters(["loading"]),
  },
};
</script>
<style lang="stylus">
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}
</style>
