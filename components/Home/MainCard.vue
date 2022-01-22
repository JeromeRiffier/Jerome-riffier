<template>
  <v-card
    class="mx-auto pa-0 mt-4"
    max-width="800"
    tile
    elevation=4
  >
    <v-row>
      <v-col
        cols="7"
        class="pa-0"
      >
        <v-img
          height="100%"
          class="white"
          src="/logo-perso.svg"
        >
        </v-img>
      </v-col>
      <v-col
        cols="5"
        class="fill-height"
      >
        <v-list-item
        >
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Qui suis-je ?
            </v-list-item-title>
            <v-list-item-subtitle class="caption">Salut et bienvenue sur mon site ! </v-list-item-subtitle>
            <v-list-item-subtitle class="caption">Je m'appel jérôme et je suis developpeur full-stack depuis 2017.</v-list-item-subtitle>
            <v-list-item-subtitle class="caption">Specialisé en framework PHP et Javascript, je vous laisse explorer ce site pour en apprendre plus sur moi.</v-list-item-subtitle>
            <v-list-item-subtitle>Et qui sait, peut être me contacté pour qu'on commence a travailler ensemble 🤷‍♂️</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {

}
</script>

<style scoped>
.v-card{
  margin-bottom: 12px;
}
</style>
