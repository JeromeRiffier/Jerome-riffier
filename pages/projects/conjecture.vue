<template>

  <projects-collatz-conjecture/>
    <!--
        Ajouter un text d'explication sur le probleme de la conjoncture "3X + 1"
        voir https://www.youtube.com/watch?v=094y1Z2wpJg
    -->
</template>

<script>
export default {
  data: () => ({
    pageTitle : 'Conjecture de Collatz',
  }),
  head() {
    return {
      title: this.pageTitle,
    }
  }
}
</script>
