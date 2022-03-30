<template>
    <v-card justify="center" align="left" cols="7" md="7" sd="12" class="pdf ma-md-10">
      <v-tooltip left>
        <template #activator="{ on, attrs }">
          <v-btn
            color="pink"
            fab
            dark
            small
            absolute
            top
            right
            v-bind="attrs"
            :href="'/CV/' + $i18n.locale + '.pdf'"
            download="CV - Jérôme Riffier"
            class="print-hide"
            v-on="on"
          >
            <v-icon>mdi-download</v-icon>
          </v-btn>
        </template>
        <span>{{ $t('Télécharger en PDF') }}</span>
      </v-tooltip>
      <v-row class="header pa-10" no-gutters>
        <v-col sm="8" cols="12" class="pl-10 pt-5">
          <v-row class="pb-4">
            <v-col cols="12" class="pa-2 pa-sm-0">
              <h2 class="text-h2 text-md-h1">{{ CV.head[$i18n.locale].nom }}</h2>
            </v-col>
            <v-col cols="12" class="pa-2 pa-sm-0">
              <h2>{{ CV.head[$i18n.locale].qualificatif }}</h2>
            </v-col>
            <v-col cols="12" class="pa-2 pa-sm-0">
              <h3>{{ CV.head[$i18n.locale].accroche }}</h3>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4" class="d-none d-sm-block print">
          <div class="portrait portrait-cv"></div>
        </v-col>
      </v-row>
      <cv-contact :contacts="CV.contacts" />
      <v-row class="px-2 pa-sm-5 mx-0">
        <v-col md="6" col="12" class="pl-2 pl-sm-4 pr-2 pr-sm-8">
          <h1 class="category info--text">{{ $t('EXPÉRIENCE PROFESSIONNELLE') }}</h1>
          <cv-experience
            v-for='experience in CV.experiences[$i18n.locale]'
            :key='experience.titre'
            :experience='experience'
          />
        </v-col>
        <v-divider vertical class="d-none d-sm-block"></v-divider>
        <v-col md="6" col="12" class="pl-2 pl-sm-4 pl-2 pl-sm-8">
          <h1 class="category info--text">{{ $t('COMPÉTENCES') }}</h1>
          <cv-competence  :competences=CV.competences />
          <h1 class="category info--text">{{ $t('POINT FORTS') }}</h1>
          <p v-for="point_fort in CV.point_forts[$i18n.locale]" :key="point_fort" class="mb-1">{{ point_fort }}</p>
          <h1 class="category info--text">{{ $t('LANGUES') }}</h1>
          <cv-langue width="100%"/>
          <h1 class="category info--text">{{ $t('FORMATION') }}</h1>
          <cv-formation
            v-for='formation in CV.formations'
            :key='formation.titre'
            :formation='formation'
          />
          <h1 class="category info--text">{{ $t('PROJETS PERSONNELS') }}</h1>
          <cv-projet v-for="projet in CV.projets[$i18n.locale]" :key="projet.titre" :projet=projet />
          <h1 class="category info--text">{{ $t('INTÉRÊTS') }}</h1>
          <cv-interet :interets=CV.interets[$i18n.locale] />
        </v-col>
      </v-row>
    </v-card>
</template>

<script>
import {get} from 'vuex-pathify'
export default {
  data: () => ({
    pageTitle : 'CV',
  }),
  computed: {
      ...get('cv/', ['CV'])
  },
  methods: {
    download() {
      console.log('download')
    }
  },
  head() {
    return {
      title: this.pageTitle,
    }
  }
}
</script>

<style scoped>
    .header{
        padding: 1rem!important;
    }
    .portrait{
        background-image: url(/moi.jpg);
        background-size: 115%;
        background-position: 65% 28%;
        height: 10rem;
        width: 10rem;
        max-width: 100%;
        max-height: 100%;
        border-radius: 10rem;
        margin-left: auto;
        margin-right: 1rem;
        border: solid 4px #4f90cd;
    }
    .category{
        font-size: 1.4rem;
        border-bottom: solid 3px;
        margin-bottom: 5px;
        margin-top: 15px;
        max-width: fit-content;
    }
    h1{
      font-family: 'Raleway', sans-serif;
    }
</style>
