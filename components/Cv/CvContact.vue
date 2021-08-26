<template>
     <v-row class="break white--text indigo darken-4 pa-5" no-gutters justify="center" align="center">
            <v-col v-for="contact in contacts" :key="contact.text" cols="12" sm="6" md="3" justify="center" align="center">
              <p><v-icon class="secondary--text mr-5">{{ contact.icon }}</v-icon>{{ contact.text }}</p>
            </v-col>
        </v-row>
</template>

<script>
    export default {
        props : {
            contacts : Array
        }
    }
</script>

<style scoped>
    /* .break {
        background-color: #0d2448;
    } */
    .break p, .break .v-icon{
        color: white;
        font-size: 0.95rem;
        margin-bottom: 0px;
    }
</style>