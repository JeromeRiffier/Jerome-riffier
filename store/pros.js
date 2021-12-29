import { make, Payload } from 'vuex-pathify'
import { PROS } from '~/assets/data.json'
const state = {
    PROS : [],
    click : () => {}
}


const actions = {
  // automatically create only `setItems()` action
  init({ commit }) {
    commit('SET_PROS', PROS)
  },
  toggle({ state, commit}, param) {
    commit(
      'SET_PROS',
      new Payload(
        'PROS@cols.'+ param.colIndex +'.cards.'+ param.cardIndex +'.reveal',
        'cols.'+ param.colIndex +'.cards.'+ param.cardIndex +'.reveal', param.val
        )
    )
  }
}

const getters = {
  // make all getters (optional)
  ...make.getters(state)
}

const mutations = {
    ...make.mutations(state),
     toggleReveal(state) {
       state.reveal = !state.reveal
     }
}


export default {
  // namespaced: true, // add this if in module
  state,
  mutations,
  actions,
  getters,
}
