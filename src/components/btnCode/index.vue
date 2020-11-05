<template>
  <div>
    <span @click="getMess" :class="second!=60?'disabled':''">{{text}}</span>
  </div>
</template>
<script>
export default {
  props: {
    isSend: {
      type: Boolean,
    },
  },
  data() {
    return {
      second: 60,
      text: "",
      time: "",
    };
  },
  mounted() {
    this.text = this.$t("btnCode.hqyzm");
  },
  watch: {
    isSend() {
      if (this.isSend) {
        if (this.second === 60) {
          this.time = setInterval(() => {
            this.second--;
            this.text = this.second + this.$t("btnCode.tip");
            if (this.second === 0) {
              this.second = 60;
              clearInterval(this.time);
              this.text = this.$t("btnCode.hqyzm");
              this.$emit("bClick", false);
            }
          }, 1000);
        }
      } else {
        clearInterval(this.time);
        this.text = this.$t("btnCode.hqyzm");
        this.second = 60;
      }
    },
  },
  methods: {
    parentHandleclick() {
      clearInterval(this.time);
      this.text = this.$t("btnCode.hqyzm");
      this.second = 60;
    },
    getMess() {
      this.$emit("click");
    },
  },
};
</script>
<style lang="stylus">
.disabled {
  background: #eee !important;
}
</style>
