<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12"><h1>{{ $t('Expérience professionelle') }}</h1></v-col>
    </v-row>

    <v-row
      v-for="(company, companyIndex) in PROS.companies"
      :key="companyIndex"
    >
      <v-col cols="12"><h2 class="pl-4 mt-6">{{ company.name }}</h2></v-col>
      <v-col
        v-for="(col, colIndex) in company.cols"
        :key="colIndex"
        :md=col.size
      >
        <v-row>
          <v-col
            v-for="(card, cardIndex) in col.cards"
            :key="cardIndex"
            :md="card.flex"
            :sm="12"
            :class="card.class"
          >
            <div :is="card.component" :card="card"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {call, sync, get} from 'vuex-pathify'

export default {
  data: () => ({
    pageTitle: 'Experience professionel',
  }),
  computed: {
    ...sync('pros/', ['PROS']),
    ...get('home/', ['HOME']),
  },
  methods: {
    ...call('pros/', ['toggle'])
  },
  head() {
    return {
      title: this.pageTitle,
    }
  }
}
</script>


<style scoped>
.v-card--reveal {
  bottom: 0;
  left: 1%;
  position: absolute;
  width: 98%;
  max-height: 80%;
}

@keyframes img_top {
  0% {
    background-position-y: 0%
  }
  100% {
    background-position-y: 100%
  }
}
</style>
