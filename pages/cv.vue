<template>
    <v-card justify="center" align="left" cols="7" md="7" sd="12" class="ma-md-10">
        <v-row class="header pa-10 indigo darken-1" no-gutters>
            <v-col md="8" cols="12" class="pl-10 pt-5 ">
                <h1 class="w-full">{{ CV.header.nom }}</h1>
                <h2 class="w-full">{{ CV.header.qualificatif }}</h2>
                <h3 class="w-full pb-4">{{ CV.header.accroche }}</h3>
            </v-col>
            <v-col md="4" class="d-none d-sm-block">
                <div class="portrait"></div>
            </v-col>
        </v-row>
        <cv-contact :contacts="CV.contacts" />
        <v-row class="pa-5">
            <v-col md="6" col="12">
                <h1 class="category info--text">{{ $t('EXPÉRIENCE PROFESSIONNELLE') }}</h1>
                <cv-experience
                    v-for='experience in CV.experiences'
                    :key='experience.titre'
                    :experience='experience'
                />
                <h1 class="category info--text">{{ $t('FORMATION') }}</h1>
                <cv-formation
                    v-for='formation in CV.formations'
                    :key='formation.titre'
                    :formation='formation'
                />
            </v-col>
            <v-col md="6" col="12">
                <h1 class="category info--text">{{ $t('COMPÉTENCES') }}</h1>
                    <cv-competence  :competences=CV.competences />
                <h1 class="category info--text">{{ $t('POINT FORTS') }}</h1>
                    <p v-for="point_fort in CV.point_forts" :key="point_fort" class="subtitle-1 mb-1">{{ point_fort }}</p>
                <h1 class="category info--text">{{ $t('PROJETS PERSONNELS') }}</h1>
                    <cv-projet v-for="projet in CV.projets" :key="projet.titre" :projet=projet />
                <h1 class="category info--text">{{ $t('LANGUES') }}</h1>
                    <cv-langue width="100%"/>
                <h1 class="category info--text">{{ $t('INTÉRÊTS') }}</h1>
                    <cv-interet :interets=CV.interets />
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
  head() {
    return {
      title: this.pageTitle,
    }
  }
}
</script>

<style scoped>
    .header{
        color: white;
        height: 13rem;
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
</style>
