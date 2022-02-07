<template>
  <v-card
    class="mx-auto pa-4 mt-4 mb-4"
    max-width="1200"
    tile
    elevation=4
  >
    <v-row>
      <v-col cols="2">
        <v-avatar
          class="ma-4 w-full elevation-4"
          size="140"
          right
        >
          <v-img
            :src="card.avatar"
            aspect-ratio="1:1"
          ></v-img>
        </v-avatar>
      </v-col>
      <v-divider class="d-none d-lg-block" vertical></v-divider>
      <v-col lg="5" cols="12">
        <v-card-title>Présentation</v-card-title>
        <v-card-subtitle>Nom</v-card-subtitle>
        <v-card-text style="white-space: break-spaces;">{{ card.name }}</v-card-text>
        <v-card-subtitle>Emploi actuel</v-card-subtitle>
        <v-card-text style="white-space: break-spaces;">{{ card.job }}</v-card-text>
        <v-card-subtitle>Centre d'intérêt</v-card-subtitle>
        <v-chip v-for="interest of card.interests" :key="interest" class="ma-1">{{ interest }}</v-chip>
        <v-card-subtitle>Technologie d'intérêt</v-card-subtitle>
        <v-chip  v-for="img of card.technologies" :key="img.src"  class="ma-1">
            <v-img  :src="img.src" height="28" :max-width="img.width" contain></v-img>
        </v-chip>
      </v-col>
      <v-divider class="d-none d-lg-block" vertical></v-divider>
      <v-col lg="5" cols="12">
        <v-card-subtitle>Reseaux sociaux</v-card-subtitle>
        <v-btn v-for="(link, name) of card.socials" :key="link" :href="link" target='_blank' class="ma-2"><v-icon>mdi-{{name}}</v-icon> {{ name }}</v-btn>
        <v-card-subtitle>Qui je suis</v-card-subtitle>
        <v-card-text style="white-space: break-spaces;">{{ card.aboutMe }}</v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props : {
    card :  Array,
  }
}
</script>

<style scoped>
.v-card__subtitle {
  font-size: 1.5rem;
  font-weight: bold;
}
.v-card__subtitle {
  font-size: 1rem;
  font-weight: bold;
}
</style>
