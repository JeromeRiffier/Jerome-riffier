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
          class="ma-lg-3 ma-md-2 w-full elevation-4"
          size="140"
        >
          <v-img
            class="portrait"
            :src="card.avatar"
            aspect-ratio="1:1"
            position="57% -40px"
          ></v-img>
        </v-avatar>
      </v-col>
      <v-divider class="d-none d-lg-block" vertical></v-divider>
      <v-col lg="5" cols="12">
        <v-card-subtitle>
          <v-icon color="accent" class="progress">mdi-account</v-icon>
          {{ $t('Presentation') }}
        </v-card-subtitle>
        <v-card-text style="white-space: break-spaces; font-size: 1.15rem;" v-html="card.name[$i18n.locale]"></v-card-text>
        <v-card-subtitle  class="">
          <v-icon color="accent" style="margin-right: 5px">mdi-card-account-mail</v-icon>
          {{ $t('Emploi actuel') }}
        </v-card-subtitle>
        <v-card-text  style="white-space: break-spaces; font-size: 1.15rem;">{{ card.job[$i18n.locale] }}</v-card-text>
        <v-card-subtitle  class="">
          <v-icon color="accent" style="margin-right: 5px">mdi-cellphone-link</v-icon>
          {{ $t('Mes compétences principales') }}
        </v-card-subtitle>
        <v-chip  v-for="img of card.technologies" :key="img.src"  class="ma-1">
          <v-img  :src="img.src" height="28" :max-width="img.width" contain></v-img>
        </v-chip>
        <v-card-subtitle  class="">
          <v-icon color="accent">mdi-bookshelf</v-icon>
          {{ $t('Centres d\'intérêts') }}
        </v-card-subtitle>
        <v-chip v-for="interest of card.interests" :key="interest" class="ma-1">{{ interest }}</v-chip>
      </v-col>
      <v-divider class="d-none d-lg-block" vertical></v-divider>
      <v-col lg="5" cols="12">
        <v-card-subtitle  class="">
          <v-icon color="accent" style="margin-right: 5px">mdi-cellphone-message</v-icon>
          {{ $t('Me contacter') }}
        </v-card-subtitle>
        <v-tooltip
          v-for="(contact, name) of card.socials"
          :key="contact.icon"
          top
          :disabled="!contact.hover"
        >
          <template #activator="{ on, attrs }">
            <v-btn
              :link="contact.isLink"
              :to="contact.to"
              :href="contact.href"
              :target='contact.target'
              v-bind="attrs"
              class="ma-2"
              v-on="on"
            >
              <v-icon>mdi-{{name}}</v-icon>
              {{ name }}
            </v-btn>
          </template>
          <span>{{ contact.hover }}</span>
        </v-tooltip >
        <v-card-subtitle class="">
          <v-icon color="accent" style="margin-right: 5px">mdi-account-question</v-icon>
          {{ $t('Qui je suis') }}
        </v-card-subtitle>
        <v-card-text style="white-space: break-spaces;font-size: 1.15rem">{{ card.aboutMe[$i18n.locale] }}</v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props : {
    card: {
      type: Object,
      default() {
        return {
          avatar: "",
          name: {
            fr: "",
            en: ""
          },
          job: {
            fr: "",
            en: ""
          },
          interests: [],
          technologies: {},
          address: "",
          socials: {},
          aboutMe: {
            fr: "",
            en: ""
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.v-icon {
  vertical-align: baseline;
}
.v-image.portrait >>> .v-image__image{
  background-size: 170%;
}
.v-card__subtitle {
  font-size: 1.5rem;
  font-weight: bold;
}
.v-card__subtitle {
  font-size: 1rem;
  font-weight: bold;
}
</style>
