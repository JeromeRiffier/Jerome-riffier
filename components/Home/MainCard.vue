<template>
  <v-card
    class="mx-auto "
    max-width="600"
    tile
    elevation=4
  >
    <v-img
      height="100%"
      class="white"
      src="/logo-perso.svg"
    >
    </v-img>
    <v-row
      align="end"
      class="fill-height"
      color="rgba(0, 0, 0, .4)"
    >
      <v-col
        cols="12">
        <v-list-item
          color="rgba(0, 0, 0, .4)"
        >
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Jérôme Riffier
            </v-list-item-title>
            <v-list-item-subtitle>Analyste/ Developpeur web</v-list-item-subtitle>
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
  background-color: rgba(255, 255, 255, .15);
  backdrop-filter: blur(5px);
  margin-bottom: 12px;
}
</style>
