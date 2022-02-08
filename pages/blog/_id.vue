<template>
  <v-container>
    <v-card-actions>
      <v-btn
        outlined
        rounded
        link
        :to="'/blog/home'"
      >
        <v-icon>mdi-arrow-left-circle</v-icon>
         Retour
      </v-btn>
    </v-card-actions>

    <v-card class="my-4">
      <v-card-title>{{ article.title }}</v-card-title>
      <v-card-subtitle><em>{{ article.date }}</em></v-card-subtitle>
      <v-card-text style="white-space: break-spaces">{{ article.description }}</v-card-text>
      <v-card-subtitle v-if="article.externalLinks.length">Liens externe: </v-card-subtitle>
      <v-btn v-for="button of article.externalLinks" :key="button.link" :href="button.link" target='_blank' class="ma-4 mt-0">
        <v-icon>{{ button.icon }}</v-icon>
        {{ button.name }}
      </v-btn>
      <v-divider class="my-4"></v-divider>
      <div :is="article.component"></div>
    </v-card>

  </v-container>
</template>

<script>
export default {
  computed: {
    article() {
      return this.$store.getters['blog/article'](
        this.$route.params.id
      )
    }
  },

}
</script>

<style scoped>

</style>
