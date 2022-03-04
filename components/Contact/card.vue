<template>
  <v-card :href="card.link">
    <v-row>
      <v-col cols="2" class="d-flex align-center">
        <v-icon color="accent" large left style="margin-left: 10px">{{ card.icon }}</v-icon>
      </v-col>
      <v-col cols="10" class="pl-5">
        <v-card-title class="pa-1">{{ title }}</v-card-title>
        <v-card-text class="pa-1">
          {{ card.text }}
          <v-icon v-if="card.copy" right @click.prevent="copyToClipboard(card.text)">mdi-content-copy</v-icon>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ['card', 'title'],
  methods: {
    copyToClipboard(text) {
      navigator.clipboard.writeText(text)
    }
  }
}
</script>

<style scoped>

</style>
