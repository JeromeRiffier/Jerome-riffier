import { make } from 'vuex-pathify'
import { BLOG } from '~/assets/data.json'
const state = {
  BLOG : [],
}


const actions = {
  // automatically create only `setItems()` action
  init({ commit }) {
    commit('SET_BLOG', BLOG)
  },
}

const getters = {
  // make all getters (optional)
  ...make.getters(state),
  article: (rootState) => (id, locale) => rootState.BLOG[locale].find((article) => parseInt(article.id) === parseInt(id)),
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
