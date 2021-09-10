<template>
    <v-container fluid>
        <projects-space-calendar/>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    pageTitle : 'Lancement spatiaux',
  }),
  head() {
    return {
      title: this.pageTitle,
    }
  }
}
</script>

<style scoped>

</style>
