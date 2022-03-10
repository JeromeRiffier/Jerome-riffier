import {make, Payload} from 'vuex-pathify'
const state = () => {
  return {
    articles: {
      fr:[],
      en:[]
    }
  }
}


const actions = {
  ...make.actions(state),
  init({ commit, dispatch }) {
    dispatch('initArticles')
  },
  initArticles({ dispatch }) {
    dispatch('api/blog/index', null, { root: true }).then((data) => {
      dispatch('setArticles', data)
    })
  },
  getArticle({dispatch, slug}) {
    dispatch('api/blog/show', slug, { root: true })
  }
}

const getters = {
  // make all getters (optional)
  ...make.getters(state),
  article: (state) => (slug,locale) => {
    state.articles[locale].find((article) => article.slug === slug)
  },
}

const mutations = {
  ...make.mutations(state),
  SET_ARTICLES: (state, payload) => {
    // if we have a Payload, do something with it
    if (payload instanceof Payload) {
      // either, update using payload...
      state.articles = payload.update(state.sort)
      // ...or, update using dot-notation `path`
      this.set(state.articles, payload.path, payload.value)
    }
    // otherwise, handle normally
    else {
      state.articles = payload
    }
  }
}


export default {
  state,
  mutations,
  actions,
  getters,
}
