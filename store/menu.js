import { make } from 'vuex-pathify'
import { MENU } from '~/static/data.json'

const state = () => ({
  MENU : []
})


const actions = {
  // automatically create only `setItems()` action
  init({ commit }) {
    commit('SET_MENU', MENU)
  }
}

const getters = {
  // make all getters (optional)
  ...make.getters(state)
}

const mutations = {
    ...make.mutations(state)
}


export default {
  // namespaced: true, // add this if in module
  state,
  mutations,
  actions,
  getters,
}
