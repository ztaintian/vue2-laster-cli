
import axios from 'axios'
import store from '@/store/index.js'
import router from '@/router'
import wx from '@/common/utils/weixin.js'
// 创建axios实例
var instance = axios.create();
instance.interceptors.request.use(
  config => {
    store.dispatch('setLoading', true);
    config.headers.lang = store.state.lang === "zh-CN" ? "zh" : "en";
    if (store.state.access_token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Token = store.state.access_token;
    }
    return config;
  },
  err => {
    store.dispatch('setLoading', false);
    return Promise.reject(err);
  });

// http response 拦截器
instance.interceptors.response.use(
  response => {
    store.dispatch('setLoading', false);
    return response.data;
  },
  error => {
    if (error.response) {
      store.dispatch('setLoading', false);
      switch (error.response.status) {
        case 500:
          var ua = navigator.userAgent.toLowerCase();
          if (ua.match(/MicroMessenger/i) == "micromessenger") {
            wx.miniProgram.getEnv((res) => {
              if (res.miniprogram) {
                wx.miniProgram.navigateTo({ url: "/pages/index/index" });
              } else {
                router.push('/login')
              }
            });
          } else {
            router.push('/login')
          }
      }
    }
    return Promise.reject(error.response)   // 返回接口返回的错误信息
  })
export default instance