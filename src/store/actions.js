import * as types from './mutation-types'
// 进行涉及到多个全局变量的复杂计算

export default {
  setAccount: ({ commit }, id) => commit(types.SET_ACCOUNTOBJ, id),
  removeAccount: ({ commit }, id) => commit(types.REMOVE_ACCOUNTOBJ, id),
  setSessionId: ({ commit }, id) => commit(types.SET_SESSIONIDOBJ, id),
  removeSessionId: ({ commit }, id) => commit(types.REMOVE_SESSIONIDOBJ, id),
  setLangSte: ({ commit }, id) => commit(types.SET_LANGSTE, id),
  setAccessToken: ({ commit }, id) => commit(types.SET_ACCESSTOKEN, id),
  setLoading: ({ commit }, id) => commit(types.SET_LOADING, id),
  setComeFrom: ({ commit }, id) => commit(types.SET_COMEFROM, id),
  removeComeFrom: ({ commit }, id) => commit(types.REMOVE_COMEFROM, id),
}
