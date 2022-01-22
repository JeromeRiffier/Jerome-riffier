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
      <v-list>
        <v-list-item class="px-2"  link nuxt to="/">
          <v-list-item-avatar>
            <v-img
            :src="MENU.img"
            aspect-ratio="1:1"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-title class="text-h6">
              {{ MENU.title }}
            </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              {{ MENU.subtitle }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ MENU.description }}</v-list-item-subtitle>
          </v-list-item-content>
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
            :to="item.link">
            <v-list-item-icon class="secondary--text">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>

          <v-divider :key="item.title"></v-divider>

        </template>
         <v-switch
          v-model="$vuetify.theme.dark"
          class="pl-5"
          inset
          color="secondary"
          label="Clair/ Sombre"
        ></v-switch>
      </v-list>

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
  }
}
</script>

<style scoped>
.v-application{
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100%;
}
.theme--light .v-main {
    background: linear-gradient(-45deg, #cbdcec, #bbd2f5, #dfeff5, #daeeff);
    background-size: 400% 400%;
    animation: gradient 50s ease infinite;
}
.theme--dark .v-main {
    background: linear-gradient(-45deg, #4d6b89,  #507381, #444e60, #223442);
    background-size: 400% 400%;
    animation: gradient 50s ease infinite;
}
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
