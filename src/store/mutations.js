import * as types from './mutation-types'

const mutations = {
  // [方法名](参数1,参数2...){方法}
  [types.SET_ACCOUNTOBJ](state, v) {
    state.accountObj = v
  },
  [types.REMOVE_ACCOUNTOBJ](state, v) {
    state.accountObj = ''
  },

  [types.SET_SESSIONIDOBJ](state, v) {
    state.sessionIdObj = v
  },
  [types.REMOVE_SESSIONIDOBJ](state, v) {
    state.sessionIdObj = ''
  },
  [types.SET_LANGSTE](state, v) {
    state.lang = v
  },
  [types.SET_ACCESSTOKEN](state, v) {
    state.access_token = v
  },
  [types.SET_LOADING](state, v) {
    state.loading = v
  },
  [types.SET_COMEFROM](state, v) {
    state.comeFrom = v
  },
  [types.REMOVE_COMEFROM](state, v) {
    state.comeFrom = ''
  }

}

export default mutations
