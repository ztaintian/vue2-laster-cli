<template>
  <div class="sign-success">
    <img :src="srcUrl" alt />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import _thumb_41875 from '@/common/images/_thumb_41875.png';
import _thumb_34354 from '@/common/images/_thumb_34354.png';
export default {
  data() {
    return {
      srcUrl: _thumb_41875,
    };
  },
  computed: {
    ...mapGetters(["lang"]),
  },
  mounted() {
    console.log(this.lang)
    this.srcUrl =
      this.lang === "en-US"
        ? _thumb_41875
        : _thumb_34354;
  },
};
</script>

<style lang="stylus">
.sign-success {
  background: #eee;
  opacity: 0.8;
  top: 0;
  position: absolute;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  z-index 999
  img {
    height: 200px;
    width: 192px;
  }
}
</style>