<template>
      <Main-Card/>
</template>

<script>
export default {
  data: () => ({
    pageTitle : 'Accueil',
  }),
  head() {
    return {
      title: this.pageTitle,
    }
  }
}
</script>
