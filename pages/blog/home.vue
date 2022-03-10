<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12"><h1>Blog</h1></v-col>
      <v-col v-for="article of articles[$i18n.locale]"  :key="article.slug" cols="12" md="4">
        <blog-card :article="article"></blog-card>
      </v-col>
      <blog-empty v-if="articles[$i18n.locale] === undefined || articles[$i18n.locale].length === 0"></blog-empty>
    </v-row>
  </v-container>
</template>

<script>
import {get} from 'vuex-pathify'

export default {
  fetch() {
    this.$store.dispatch('blog/init')
  },
  head() {
    return {
      title: this.pageTitle,
    }
  },
  computed: {
    ...get('blog/', ['articles']),
  },
}
</script>

<style scoped>

</style>
