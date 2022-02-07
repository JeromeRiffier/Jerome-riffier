<template>
  <div>
    <home-main-Card :card="HOME.card"/>
    <v-timeline class="d-none">
      <v-timeline-item
        v-for="(timelineItem, index) in HOME.timeline"
        :key="timelineItem.date"
        :class="classAlternate(index)"
        :color="timelineItem.date.color"
      >
        <template #opposite>
          <span
            :class="`headline font-weight-bold ${timelineItem.date.color}--text`"
            v-text="timelineItem.date.year"
          ></span>
        </template>
        <home-timeline-content
          :item="timelineItem"
          :index="index">

        </home-timeline-content>
      </v-timeline-item>
    </v-timeline>
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
