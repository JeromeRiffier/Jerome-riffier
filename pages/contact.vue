<template>
    <v-container fluid>
      <v-container class="my-4 pa-0 pb-4">
        <v-row>
          <v-col
            v-for="(card, title) of CONTACT.cards"
            :key="card.text"
            cols="12" md="3"
            class="mb-2"
          >
            <contact-card :card="card" :title="title"></contact-card>
          </v-col>
        </v-row>
      </v-container>
      <v-card class="px-4 py-2" rounded="0">
        <contact-form></contact-form>
      </v-card>
    </v-container>
</template>

<script>
import {get} from 'vuex-pathify'

export default {
  data: () => ({
    pageTitle : 'Me contacter',
  }),
  head() {
    return {
      title: this.pageTitle,
    }
  },
  computed: {
    ...get('contact/', ['CONTACT']),
  },
  methods: {
    copyToClipboard(text) {
      navigator.clipboard.writeText(text)
    }
  }
}
</script>

<style scoped>
.v-text-field, .v-text-field .v-label{
  color: black!important;
  caret-color: black!important;
}
</style>
