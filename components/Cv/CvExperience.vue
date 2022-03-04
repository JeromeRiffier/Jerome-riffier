<template>
    <v-row class="Experience mx-0 ml-0 ml-md-5 py-4 w-full">
      <v-col cols="12" class="pa-0 ma-0 pt-2">
        <h2>{{ experience.titre }}</h2>
      </v-col>
      <v-col cols="12" class="pa-0 ma-0 pt-2">
        <h3 class="cv--text">{{ experience.entreprise }}</h3>
      </v-col>
      <v-col cols="12" class="pa-0 ma-0">
        <v-col cols="6" class="pa-0 ma-0 float-left">
          <p>{{ experience.periode }}</p>
        </v-col>
        <v-col cols="6"  class="pa-0 ma-0 float-right">
          <p class="float-right">{{ experience.lieu}}</p>
        </v-col>
        <v-col cols="12" class="pa-0 ma-0 float-left">
          <p class="mb-0 " v-html="experience.description"></p>
        </v-col>
      </v-col>
      <v-col cols="12" class="pa-0 ma-0">
        <div  class="list w-full">
          <ul>
            <li v-for="poste in experience.postes" :key="poste.id">{{ poste.text }}</li>
          </ul>
        </div>
      </v-col>
        <v-col cols="12" class="pa-0 ma-0 mt-4">
          <p class="technologie">Technologie : {{ experience.technologies }}</p>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        props:  [ 'experience' ]
    }
</script>


<style scoped>
.Experience {
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: solid 1px #80808061;
}
h2 {
    font-size: 1rem;
}
h3 {
    font-size: 0.9rem;
}
.list {
    margin-left: 1.25rem;
}


ul {
    list-style: none; /* Remove default bullets */
}
ul li::before {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: var(--v-cv-base);
  font-weight: bold; /* If you want it to be bold */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
  margin-right: 1em; /* Also needed for space (tweak if needed) */

}
.theme--dark .Lieu, .theme--dark .Date, .theme--dark span.Poste, .theme--dark span.technologie::before, .theme--dark ul li::before {
    /*color: #a1ddff;*/
}
</style>
