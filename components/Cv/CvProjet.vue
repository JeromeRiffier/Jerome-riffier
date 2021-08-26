<template>
    <div class="projet" 
            data-tooltip="Ouvrir 'Projet personnels' pour une démo" 
            data-inverted="" 
            data-position="left center">
        <h3 class="info--text">{{ projet.titre }}</h3>
        <p>{{ projet.description }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            projet : Object
        }
    }
</script>

<style scoped>
h3 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    margin: 0px;
}
p {
    color: #6f6e6e;
    font-size: .7rem;
    margin-bottom: 0px;
}
.projet {
    border-bottom: solid 1px #80808061;
}
.theme--dark p {
    color: #cccccc;
}
</style>