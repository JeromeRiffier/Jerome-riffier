<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :class="MENU.class"
      class="elevation-4"
      :temporary="$vuetify.breakpoint.mobile"
      :permanent="!$vuetify.breakpoint.mobile"
      app
      bottom
    >
      <v-list v-if="!$vuetify.breakpoint.mobile" class="pt-0">
        <v-list-item class="pa-0 mt-0" >
          <v-img
            width="100%"
            contain
            class="white"
            src="/logo-perso.svg"
            aspect-ratio="16:9"
          >
          </v-img>
        </v-list-item>
      </v-list>

       <v-list
        nav
        dense
      >
        <template v-for="item in MENU.items">
          <v-list-group
            v-if="item.group"
            :key="'list' + item.title "
            class="white--text"
            no-action
          >
            <template #activator>
             <v-list-item class="pl-0">
                <v-list-item-icon>
                  <v-icon color="accent">{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
                </v-list-item-content>
             </v-list-item>
            </template>

            <v-list-item
              v-for="groupItem in item.group"
              :key="groupItem.link + groupItem.index + 'listGroup'"
              link
              nuxt
              :to="groupItem.link">
              <v-list-item-content>
                <v-list-item-title >{{ $t(groupItem.title) }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

           <v-list-item
            v-else
            :key="item.title + 'sub list'"
            link
            nuxt
            :to="item.link"
            class="my-1"
           >
            <v-list-item-icon class="accent--text">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
          </v-list-item>

          <v-divider :key="item.title"></v-divider>

        </template>
      </v-list>

      <template #append>
        <div class="w-full pa-4">
          <v-btn
            icon
            color="warning"
            elevation="2"
            class="ml-4"
            @click="switchMode"
          >
            <v-icon>
              mdi-theme-light-dark
            </v-icon>
          </v-btn>

          <v-btn
            v-if="$i18n.locale !== 'fr'"
            icon
            text
            color="warning"
            elevation="2"
            class="ml-4"
            @click="$i18n.setLocale('fr')"
          >
            <v-img src="/fr.png" height="28" width="28" contain></v-img>
          </v-btn>
          <v-btn
            v-if="$i18n.locale !== 'en'"
            icon
            text
            color="warning"
            elevation="2"
            class="ml-4"
            @click="$i18n.setLocale('en')"
          >
            <v-img src="/en.png" height="28" width="28" contain></v-img>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main class="background">
      <v-container>
        <v-btn
        v-if="$vuetify.breakpoint.mobile"
          fixed
          right
          bottom
          color="secondary"
          :dark=!$vuetify.theme.dark
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
  data: () => ({
    drawer: false,
  }),
  fetch() {
    this.$store.dispatch('menu/init')
    this.$store.dispatch('cv/init')
    this.$store.dispatch('pros/init')
    this.$store.dispatch('home/init')
    this.$store.dispatch('blog/init')
    this.$store.dispatch('contact/init')
  },
  computed: {
    ...get('menu/', ['MENU'])
  },
  watch: {
    '$colorMode.value' () {
      this.$vuetify.theme.dark = this.$colorMode.value === 'dark'
    },
  },
  methods: {
      switchMode() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      },
  },

}
</script>

<style scoped>

</style>
