<template>
  <div>
    <home-main-Card :card="HOME.card"/>
  </div>
</template>

<script>
import {get} from 'vuex-pathify'

export default {
  data: () => ({
    pageTitle: 'Accueil',
  }),
  head() {
    return {
      title: this.pageTitle,
    }
  },
  computed: {
    ...get('home/', ['HOME']),
  },
  methods: {
    classAlternate (index) {
      return index % 2 === (0 || 1) ? 'text-right' : 'text-left';
    }
  }
}
</script>

<style>
.v-timeline-item {
  padding-bottom: 0px;
}
</style>
