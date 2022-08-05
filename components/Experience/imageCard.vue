<template>
  <v-card class="pa-2" elevation="2">
    <v-row v-if="card.imgs">
      <v-col
        v-for="(img, index) in card.imgs"
        :key="index"
        :md="12/card.imgs.length"
      >
        <v-img
          :src="img"
          class="ma-1 image"
          :height="card.height"
          :contain="card.contain"
        >
        </v-img>
      </v-col>
    </v-row>
    <v-toolbar v-if="!reveal" color="rgba(0,0,0,0)" elevation="0">
      <div>
        <v-card-title class="subtitle-1" v-text="card.title"></v-card-title>
        <v-card-subtitle class="subtitle-1" v-text="card.subtitle"></v-card-subtitle>
      </div>

      <v-spacer></v-spacer>
      <v-btn
        v-if="card.details"
        v-model="reveal"
        icon
        color="accent"
        @click="toggleReveal"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row>
      <v-col cols="12" v-html="card.description"></v-col>
    </v-row>
    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
      >
        <v-card-text class="pb-15">
          <h3>
            {{ card.title }} {{ card.subtitle }}
          </h3>
          <v-divider></v-divider>
          <ul class="mt-1">
            <li v-for="(detail, index) in card.details[$i18n.locale]" :key="index">{{ detail }}</li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-btn
            fab
            small
            right
            absolute
            color="accent"
            class="mb-15"
            @click="toggleReveal"
          >
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default() {}
    }
  },
  data() {
    return {
      reveal: false
    }
  },
  methods: {
    toggleReveal() {
      this.reveal = !this.reveal
    }
  },
}
</script>

<style scoped>

</style>
