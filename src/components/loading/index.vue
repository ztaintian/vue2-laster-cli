
<template>
  <van-popup :close-on-click-overlay="false" v-model="show" style="background-color:transparent">
    <div class="loadingWrap">
      <van-loading v-if="show" type="spinner" />
    </div>
  </van-popup>
</template>

<script>
import { Loading, Popup } from "vant";
export default {
  components: {
    "van-popup": Popup,
    "van-loading": Loading,
  },
  name: "loading",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang='stylus' scoped>
.loadingWrap {
  >>>.van-popup {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>