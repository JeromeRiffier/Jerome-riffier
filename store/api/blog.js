import { groupBy } from 'lodash'

const actions = {
  index(context) {
    // TODO Use "only" on query to not import Body
    return this.$content('articles').fetch().then((articles) => {
      return groupBy(articles, 'lang')
    });
  },
  show(context, slug) {
    return this.$content('articles').where({slug}).fetch().then((articles) => {
      return articles[0]
    })
  },
}

export default {
  actions
}
