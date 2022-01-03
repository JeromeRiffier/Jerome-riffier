<template>
  <v-card class="py-4" :class="classAlternate">
    <v-card-title  :class="`pt-0 headline font-weight-light mb-4 ${item.date.color}--text`">
      <v-img v-if="item.companyLogo" :src="item.companyLogo" max-width="300" max-height="150" contain></v-img>
      <h2 v-else>{{ item.title }}</h2>
    </v-card-title>
    <v-card-subtitle> {{ item.town }}</v-card-subtitle>
    <v-card-text v-if="item.description">{{ item.description }}</v-card-text>
  </v-card>
</template>
<!--TODO AJOUTER LES LOGO DES ENTREPRISE A COTé DU TITRE-->
<!-- PLUS AJOUTER LES LOGO DES TECHNOLOGIE DE l'autre coté vers les dates-->

<script>
export default {
  props : {
    item :  Array,
    index : Number
  },
  computed: {
    classAlternate () {
      return this.index % 2 === (0 || 1) ? 'float-right' : 'float-left';
    }
  }
}
</script>

<style scoped>
  .v-card{
    width: fit-content;
    padding: 1rem;
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(5px);
  }

</style>
