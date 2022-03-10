import { make } from 'vuex-pathify'
import { CV } from '~/static/data.json'
const state = () => ({
  CV : {
    head: {
      fr: {},
      en: {}
    },
    contacts: [],
    competences: [],
    experiences: {
      "fr": [],
      "en": []
    },
    formations: [],
    interets: {
      "fr": [],
      "en": []
    },
    projets: {
      "fr": [],
      "en": []
    },
    point_forts: {
      "fr": [],
      "en": []
    }
  }
})


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
