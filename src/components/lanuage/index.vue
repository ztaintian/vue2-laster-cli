<template>
  <div class="fixedImage">
    <div class="win">
      <div class="title">
        <h6 class="t_center">语言设定</h6>
        <h6 class="t_center">Language Settings</h6>
      </div>
      <ul>
        <li v-for="(item,index) in lang" :key="index" @click="setLang(item.value)">
          <div class="relative">
            <img :src="item.icon" />
            <img v-if="lanuage===item.value" src="../../common/images/gou.png" class="active" />
          </div>
          <span>{{item.text}}</span>
        </li>
      </ul>
      <div class="confirm"  @click="submit">{{$t('lanuage.confirm')}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang: {
      type: Array,
    },
    value: {
      type: String,
    },
  },
  data() {
    return {
      lanuage: "",
    };
  },
  mounted() {
    this.lanuage = this.value || "zh-CN";
  },
  methods: {
    setLang(e) {
      this.lanuage = e;
    },
    submit() {
      this.$emit("click", this.lanuage);
    },
  },
};
</script>

<style lang="stylus">
.fixedImage {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  font-size 18px
  .win {
    margin-left: 40px;
    margin-right: 40px;
    background: #fff;
    width: 100%;
    padding-bottom: 23px;
    border-radius: 20px;
  }
  .t_center {
    text-align center
  }
  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    box-shadow: 3px 3px 3px #e7edf1;
    border: 1px solid #e3e9ee;
  }

  ul {
    padding-top: 10px;
    padding-bottom: 30px;
  }

  li {
    margin-top: 20px;
    text-align: center;
  }

  span {
    display: block;
  }

  .confirm {
    margin-left: 15px;
    margin-right: 15px;
    background: clan;
    color: #fff;
    text-align center;
    line-height 40px
    border-radius: 20px;
  }

  h6:nth-child(1) {
    padding-top: 30px;
    padding-bottom: 16px;
    color: #666666;
  }

  h6:nth-child(2) {
    color: #999999;
  }

  .title {
    border-bottom: 1px solid #cecece;
    padding-bottom: 22px;
  }

  .relative {
    position: relative;
    display: inline-block;
  }

  .active {
    position: absolute;
    right: -8px;
    bottom: 5px;
    width: 20px;
    height: 20px;
  }
}
</style>