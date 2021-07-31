<template>
    <v-row justify="center" align="center" cols="7" md="7" sd="12" class="mb-lg-15">
        <v-row class="header mt-lg-5 pa-10 indigo darken-1">
            <v-col md="8" >
                <h1>{{ CV.header.nom }}</h1>
                <h2 class="blue--text text--lighten-1">{{ CV.header.qualificatif }}</h2>
                <h3>{{ CV.header.accroche }}</h3>
            </v-col>
            <v-col md="4" class="d-none d-sm-block">
                <div class="portrait"></div>
            </v-col>
        </v-row>
       <cv-contact :contacts="CV.contacts" />
        <v-row class="white pa-5">
            <v-col md="6" col="12">
                <h1 class="category">EXPÉRIENCE PROFESSIONNELLE</h1>
                <cv-experience 
                    v-for='experience in CV.experiences'
                    :key='experience.titre'
                    :experience='experience'
                />
                <h1 class="category">FORMATION</h1>
                 <cv-formation 
                    v-for='formation in CV.formations'
                    :key='formation.titre'
                    :formation='formation'
                />
            </v-col>
            <v-col md="6" col="12">
                <h1 class="category">COMPÉTENCE</h1>
                    <cv-competence  :competences=CV.competences />
                <h1 class="category">POINT FORTS</h1>
                    <p class="subtitle-1" v-for="point_fort in CV.point_forts" :key="point_fort">{{ point_fort }}</p>
                <h1 class="category">PROJETS PERSONNELS</h1>
                    <cv-projet v-for="projet in CV.projets" :key="projet.titre" :projet=projet />
                <h1 class="category">LANGUES</h1>
                    <cv-langue width="100%"/>
                <h1 class="category">INTÉRÊTS</h1>
                    <cv-interet :Interets=CV.interets />
            </v-col>
        </v-row>
    </v-row>
</template>

<script>
import {get} from 'vuex-pathify'
export default {
    computed: {
        ...get('cv/', ['CV'])
    }
}
</script>

<style scoped>
    .header{
        background-color: #293d5b;
        color: white;
        height: 13rem;
        padding: 1rem!important;
    }
    .header h2 {
        color: #4f90cd;
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
        color: #4f90cd;
        border-bottom: solid 3px;
        margin-bottom: 5px;
        margin-top: 15px;
        max-width: fit-content;
    }
</style>