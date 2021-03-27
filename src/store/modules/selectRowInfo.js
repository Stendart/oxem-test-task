
export default {
  namespaced: true,

  state: {
    rowData: {}
  },

  mutations: {
    setRowData(state, payload) {
      state.rowData = payload
    }
  },

  actions: {

  },

  getters: {
    getRowData(state) {
      return state.rowData
    }
  }
}
