export default {
  namespaced: true,

  state: {
    filterSubstr: ''
  },

  mutations: {
    setFilterSubstr(state, payload) {
      state.filterSubstr = payload
    }
  },

  actions: {

  },

  getters: {
    getFilterSubstr(state) {
      return state.filterSubstr
    }
  }
}
