<template>
  <v-container>
    <v-card-actions>
      <v-btn
        outlined
        rounded
        link
        color="accent"
        :to="'/blog/home'"
        class="print-hide"
      >
        <v-icon>mdi-arrow-left-circle</v-icon>
         {{ $t('Retour')}}
      </v-btn>
    </v-card-actions>

    <v-card class="my-0 my-sm-4 pa-4 pdf">
      <v-card-title><h1>{{ article.title }}</h1></v-card-title>
      <nuxt-content class="pa-4" :document="article" />
    </v-card>

  </v-container>
</template>

<script>
import { get } from 'vuex-pathify'
export default {
  fetch() {
    return this.$store.dispatch(
      'blog/_slug/getArticle',
      this.$route.params.slug
    )
  },
  head() {
    return {
      title: this.$route.params.sluge,
    }
  },
  computed: {
    ...get('blog/_slug/', ['article'])
  },
  destroyed() {
    this.$store.dispatch('blog/_slug/getArticle', {
      article: {
        title: '',
        date: '',
        description: '',
        externalLinks: []
      }
    })
  }
}
</script>

<style scoped>

</style>
