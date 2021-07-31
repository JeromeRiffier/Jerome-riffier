<template>
  <v-app>
    <v-navigation-drawer
      class="blue darken-4 white"
      :temporary="this.$vuetify.breakpoint.mobile"
      :permanent="!this.$vuetify.breakpoint.mobile"
      app
      v-model="drawer"
      bottom
    >
      <v-list>
        <v-list-item class="px-2"  link nuxt to="/">
            <v-list-item-avatar>
              <v-img 
              src="/portrait.png"
              aspect-ratio="1:1"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-title class="text-h6">
                Jérôme Riffier
              </v-list-item-title>
          </v-list-item>

          <v-list-item disabled>
            <v-list-item-content>
              <v-list-item-title>
                Développeur / Concepteur
              </v-list-item-title>
              <v-list-item-subtitle>Passionné d'innovation et d'intelligence artificielle</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-list
          nav
          dense
        >
          <v-list-item link nuxt to="cv">
            <v-list-item-icon>
              <v-icon>mdi-card-account-details</v-icon>
            </v-list-item-icon>
            <v-list-item-title>CV</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="mt-1" link nuxt to="professionalExperience">
            <v-list-item-icon>
              <v-icon>mdi-briefcase</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Experience professionel</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="mt-1" link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Projet personnel</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="mt-1" link nuxt to="contact">
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Me contacter</v-list-item-title>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="background-image: linear-gradient(162deg, #BBDEFB 0%, #0D47A1 100%);">
      <!-- and if darkMode linear-gradient(162deg, #0D47A1 0%, #020024 100%) #020024 0% -->
      <v-container>
        <v-btn
        v-if="this.$vuetify.breakpoint.mobile"
          @click.stop="drawer = !drawer"
          fixed
          right
          bottom
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="drawer">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-menu
          </v-icon>
        </v-btn>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
  beforeMount() {
    this.$store.dispatch('cv/init')
    this.$store.dispatch('pros/init')
  }
}
</script>

<style scoped>
.v-navigation-drawer *{
  color: white;
}
.v-application{
    
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100%;
}
</style>