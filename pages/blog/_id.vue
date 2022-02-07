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

    <v-card>
      <h1>{{ id }}</h1>
    </v-card>

  </v-container>
</template>

<script>
import { get } from 'vuex-pathify'

export default {
  // eslint-disable-next-line require-await
  async asyncData({ params }) {
    const id = params.id // En appelant /abc, le slug sera "abc".
    return { id }
  },
  computed: {
    ...get('blog/', ['article']),
  },

}
</script>

<style scoped>

</style>
