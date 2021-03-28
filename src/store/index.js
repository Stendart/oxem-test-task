import Vue from 'vue'
import Vuex from 'vuex'

import selectRowInfo from './modules/selectRowInfo';
import filterSubstring from './modules/filterSubstring';

Vue.use(Vuex)


const SMALL_DATA_URL = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
const BIG_DATA_URL = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

export default new Vuex.Store({
  state: {
    peoples: []
  },
  mutations: {
    setSmallDate(state, payload) {
      state.peoples = payload
    },
    addNewRow(state, payload) {
      state.peoples.unshift(payload)
    }
  },
  actions: {
    async getSmallData({commit}) {
      try {
        const response = await fetch(SMALL_DATA_URL)
        const data = await response.json();
        commit('setSmallDate', data)
      } catch (e) {
        console.log(e.message)
      }

    }
  },
  getters: {
    getPeoples(state) {
      return state.peoples
    }
  },
  modules: {
    selectRowInfo,
    filterSubstring
  }
})
