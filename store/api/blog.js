import { groupBy } from 'lodash'

const actions = {
  index(context) {
    return this.$content('blog')
      .only(['title', 'description', 'createdAt', 'slug', 'lang'])
      .fetch()
      .then((blog) => { return groupBy(blog, 'lang')});
  },
  show(context, slug) {
    return this.$content('blog')
      .where({ slug})
      .fetch()
      .then((blog) => { return blog[0]})
  },
}

export default {
  actions
}
