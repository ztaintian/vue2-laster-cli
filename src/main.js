import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ajax from './common/http'
import components from './plugins/components.js'
import 'lib-flexible'
import Vue18n from 'vue-i18n'
import messages from './common/lang'
import * as regs from '@/common/utils/regs';
import { Toast } from "vant";
import wx from '@/common/utils/weixin.js';
//使用引入
Vue.use(components)
Vue.use(Vue18n);
const i18n = new Vue18n({
  locale: store.state.lang || 'zh-CN',    // 语言标识
  messages
})
Vue.config.productionTip = false
Vue.prototype.Ajax = Ajax;
Vue.prototype.$wx = wx;
Vue.prototype.$regs = regs;
Vue.prototype.$getCToken = () => {
  // 获取token挂在Vue上
  return Ajax.post(`/openapi/auth/getCToken`, {
    account: store.state.accountObj
  }).then(response => {
    if (response.code == 0) {
      store.dispatch('setAccessToken', response.token);
    } else {
      Toast(response.msg);
    }
  }).catch((err) => {
    console.log(err)
  });
}
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
