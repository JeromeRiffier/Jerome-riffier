import { make } from 'vuex-pathify'
const state = () => {
  return {
    article: {
      title:'',
      date: '',
      description: '',
      externalLinks: []
    }
  }
}

const getters = {
}

const actions = {
  ...make.actions(state),
  getArticle({ dispatch }, slug) {
    dispatch('api/blog/show', slug, {
      root: true
    }).then((data) => dispatch('setArticle', data))
  }
}

const mutations = {
  ...make.mutations(state),
}

export default {
  state,
  mutations,
  actions,
  getters
}
