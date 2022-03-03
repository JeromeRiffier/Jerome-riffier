import { groupBy } from 'lodash'

const actions = {
  index(context) {
    return this.$content('articles')
      .only(['title', 'description', 'createdAt', 'slug', 'lang'])
      .fetch()
      .then((articles) => { return groupBy(articles, 'lang')});
  },
  show(context, slug) {
    return this.$content('articles')
      .where({slug})
      .fetch()
      .then((articles) => { return articles[0]})
  },
}

export default {
  actions
}
