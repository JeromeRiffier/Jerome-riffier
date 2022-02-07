import { make } from 'vuex-pathify'
import { BLOG } from '~/assets/data.json'
const state = {
  BLOG : []
}


const actions = {
  // automatically create only `setItems()` action
  init({ commit }) {
    commit('SET_BLOG', BLOG)
  },
  getArticle({ dispatch, commit }, id) {
    dispatch('api/blog/show', id, {
      root: true
    }).then((data) => {
      //
    })
  },
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
