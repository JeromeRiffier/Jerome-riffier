<template>
  <v-card class="mb-4">
    <v-row>
      <v-col cols="12" md="4" lg="4" class="">
        <v-img
          :src="card.logo"
          class=" mx-lg-12 image"
          height="100%"
          center
          contain
        ></v-img>
      </v-col>
      <v-col cols="12" md="8" lg="8" class="pa-4 align-self-center">
        <p class="mb-0" v-for="(detail, index) in card.details[$i18n.locale]" v-html="detail"></p>
        <v-chip v-for="img of card.technologies" :key="img.src" class="ma-1">
          <v-img :src="img.src" height="28" :max-width="img.width" contain></v-img>
        </v-chip>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default() {}
    }
  }
}
</script>

<style scoped>

</style>
