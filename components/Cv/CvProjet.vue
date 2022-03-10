<template>
    <div class="projet pb-1 ml-5"
            data-tooltip="Ouvrir 'Projet personnels' pour une démo"
            data-inverted=""
            data-position="left center">
        <h3 class="cv--text">{{ projet.titre }}</h3>
        <p>{{ projet.description }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            projet: {
              type: Object,
              default() {
                return {}
              }
            }
        }
    }
</script>

<style scoped>
h3 {
    margin-bottom: 0.5rem;
    margin: 0px;
}
p {
    margin-bottom: 0px;
}
.projet {
    border-bottom: solid 1px #80808061;
}
.theme--dark p {
    color: #cccccc;
}
</style>
