import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

  Vue.use(Vuex)

// 这里定义初始值

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  plugins: [vuexLocal.plugin]
})