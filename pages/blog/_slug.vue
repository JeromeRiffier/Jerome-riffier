<template>
  <v-container>
    <v-card-actions>
      <v-btn
        outlined
        rounded
        link
        color="accent"
        :to="'/blog/home'"
      >
        <v-icon>mdi-arrow-left-circle</v-icon>
         {{ $t('Retour')}}
      </v-btn>
    </v-card-actions>

    <v-card class="my-4 pa-4">
      <v-card-title>{{ article.title }}</v-card-title>
      <nuxt-content :document="article" />
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
