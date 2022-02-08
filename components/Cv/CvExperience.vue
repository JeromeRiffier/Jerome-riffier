<template>
    <div class="Experience ml-5" data-tooltip="Ouvrir 'Expérience professionnelle' pour une démo" data-inverted="" data-position="right center">
        <h2>{{ experience.titre }}</h2>
        <h3>{{ experience.entreprise }}</h3>
        <div class="span-container">
            <span class="Date accent--text">{{ experience.periode }}</span>
            <span class="Lieu accent--text">{{ experience.lieu}}</span>
            <span class="Description accent--text text--darken-2" v-html="experience.description"></span>
        </div>
        <span class="Poste accent--text text-lighten1"></span>
        <ul class="list">
            <li v-for="poste in experience.postes" :key="poste.id">{{ poste.text }}</li>
        </ul>
        <span class="technologie">{{ experience.technologies }}</span>
    </div>
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
    margin-top: 10px;
    margin-bottom: 5px;
}
h3 {
    font-size: 0.9rem;
    margin-top: 0px;
}
.span-container {
    width: 100%;
    margin-bottom: 5px;
    margin-top: 5px;
}
.Date {
    font-size: 0.8rem;
    float: left;
}
.Lieu {
    font-size: 0.8rem;
    float: right;
}
.Description {
    width: 100%;
    margin-top: 1px;
    font-size: 0.8rem;
    line-height: 1rem;
    float: left;
}
.list {
    margin-left: 1.25rem;
    font-size: 0.7em;
    color: #212121;
    font-weight: 700;
}
.theme--dark .list  {
    color: #d8d8d8;

}
span.Poste::before {
    content: 'Description du poste';
}
span.Poste {
    display: contents;
    width: 100%;
    margin-bottom: 10px;
    margin-left: -1.25rem;
    font-size: 0.7rem;
    float: left;
}
span.technologie {
    display: contents;
    width: 100%;
    margin-bottom: 10px;
    margin-left: -1.25rem;
    font-size: 0.75rem;
    font-weight: 500;
    float: left;
}
span.technologie::before {
    content: 'Technologie : ';
    color: var(--v-accent-base)!important;
}
ul {
    list-style: none; /* Remove default bullets */
}
ul li::before {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  font-weight: bold; /* If you want it to be bold */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
  margin-right: 1em; /* Also needed for space (tweak if needed) */

}
.theme--dark .Lieu, .theme--dark .Date, .theme--dark span.Poste, .theme--dark span.technologie::before, .theme--dark ul li::before {
    color: #a1ddff;
}
</style>
