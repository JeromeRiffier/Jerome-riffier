<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="article of BLOG"  :key="article.id" cols="4">
        <blog-card :article="article"></blog-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {get} from 'vuex-pathify'

export default {
  head() {
    return {
      title: this.pageTitle,
    }
  },
  computed: {
    ...get('blog/', ['BLOG']),
  },
}
</script>

<style scoped>

</style>
