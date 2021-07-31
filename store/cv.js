import { make } from 'vuex-pathify'
import { CV } from '~/assets/data.json'
const state = {
  CV : []
}


const actions = {
  // automatically create only `setItems()` action
  init({ commit }) {
    commit('SET_CV', CV)
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