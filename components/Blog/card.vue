<template>
  <v-card>
    <v-card-title>{{ article.title }}</v-card-title>
    <v-card-subtitle><em>{{ article.date }}</em></v-card-subtitle>
    <v-card-text style="white-space: break-spaces">{{ shortDescription }}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        outlined
        rounded
        text
        link
        :to="'/blog/'+article.id"
      >
        Lire
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['article'],
  computed: {
    shortDescription() {
      return this.article.description.slice(0, 200) + (this.article.description.length > 200 ? "..." : "");
    }
  }
}
</script>

<style scoped>

</style>
