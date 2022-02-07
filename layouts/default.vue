<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :class="MENU.class"
      :temporary="$vuetify.breakpoint.mobile"
      :permanent="!$vuetify.breakpoint.mobile"
      app
      bottom
    >
      <v-list v-if="!$vuetify.breakpoint.mobile" class="pt-0">
        <v-list-item class="pa-0 mt-0" >
          <v-img
            height="100%"
            class="white"
            src="/logo-perso.svg"
          >
          </v-img>
        </v-list-item>
      </v-list>

       <v-list
        nav
        dense
      >
         <v-list-item v-if="$vuetify.breakpoint.mobile">
           <v-list-item-icon class="secondary--text">
             <v-icon>mdi-home</v-icon>
           </v-list-item-icon>
           <v-list-item-content>
             <v-list-item-title>Accueil</v-list-item-title>
           </v-list-item-content>
         </v-list-item>
        <template v-for="item in MENU.items">
          <v-list-group
            v-if="item.group"
            :key="'list' + item.title "
            class="white--text"
            no-action
          >
            <template #activator>
             <v-list-item class="pl-0">
                <v-list-item-icon class="secondary--text">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
             </v-list-item>
            </template>

            <v-list-item
              v-for="item in item.group"
              :key="item.link + item.index + 'listGroup'"
              link
              nuxt
              :to="item.link">
              <v-list-item-content>
                <v-list-item-title >{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

           <v-list-item
            v-else
            :key="item.title + 'sub list'"
            link
            nuxt
            :to="item.link"
           class="my-1">
            <v-list-item-icon class="secondary--text">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>

          <v-divider :key="item.title"></v-divider>

        </template>

      </v-list>
        <v-btn
          icon
          absolute
          bottom
          color="warning"
          @click="switchMode"
          elevation="2"
          class="ml-4"
        >
          <v-icon>
            mdi-theme-light-dark
          </v-icon>
        </v-btn>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <v-btn
        v-if="$vuetify.breakpoint.mobile"
          fixed
          right
          bottom
          color="secondary"
          :dark=!dark
          fab
          @click.stop="drawer = !drawer"
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
import {get} from 'vuex-pathify'
export default {
  computed: {
    ...get('menu/', ['MENU'])
  },
  data: () => ({
    drawer: false,
  }),
  beforeMount() {
    this.$store.dispatch('menu/init')
    this.$store.dispatch('cv/init')
    this.$store.dispatch('pros/init')
    this.$store.dispatch('home/init')
    this.$store.dispatch('blog/init')
  },
  methods: {
      switchMode() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      }
  }
}
</script>

<style scoped>

</style>
