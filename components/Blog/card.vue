<template>
  <v-card>
    <v-card-title>{{ article.title }}</v-card-title>
    <v-card-subtitle><em>{{ article.date }}</em></v-card-subtitle>
    <v-card-text>{{ article.description }}</v-card-text>
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
  props: ['article']
}
</script>

<style scoped>

</style>
