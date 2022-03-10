import { make } from 'vuex-pathify'
import { CONTACT } from '~/static/data.json'
const state = () => ({
  CONTACT : []
})


const actions = {
  // automatically create only `setItems()` action
  init({ commit }) {
    commit('SET_CONTACT', CONTACT)
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
