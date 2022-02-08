<template>
   <v-container fluid>
     <v-row
       v-for="(company, companyIndex) in PROS.companies"
       :key="companyIndex"
     >
       <v-col cols="12"><h1>{{ company.name }}</h1></v-col>
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
              <v-card class="pa-2"  elevation="2">
                <v-row >
                  <v-col
                      v-for="(img, index) in card.imgs"
                      :key="index"
                      :md="12/card.imgs.length"
                  >
                    <v-img
                      :src="img"
                      class=" align-end ma-1 image"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      :height="card.height"
                    >
                    </v-img>
                  </v-col>
                </v-row>
                 <v-toolbar color="rgba(0,0,0,0)" elevation="0">
                   <div>
                    <v-card-title class="subtitle-1" v-text="card.title"></v-card-title>
                    <v-card-subtitle class="subtitle-1" v-text="card.subtitle"></v-card-subtitle>
                   </div>

                    <v-spacer></v-spacer>
                    <v-btn v-model="card.reveal"
                      icon
                      color="accent"
                      @click="toggle({'companyIndex':companyIndex, 'cardIndex':cardIndex, 'colIndex':colIndex, 'val': true})"
                    >
                      <v-icon>mdi-chevron-up</v-icon>
                    </v-btn>
                 </v-toolbar>
                  <v-expand-transition>
                    <v-card
                      v-if="card.reveal"
                      class="transition-fast-in-fast-out v-card--reveal"
                    >
                      <v-card-text class="pb-15">
                          <h3>
                            {{ card.title }} {{ card.subtitle }}
                          </h3>
                          <v-divider></v-divider>
                        <ul class="mt-1">
                          <li v-for="(detail, index) in card.details" :key="index">{{ detail }}</li>
                        </ul>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn
                          fab
                          small
                          right
                          absolute
                          color="accent"
                          class="mb-15"
                          @click="toggle({'companyIndex':companyIndex, 'cardIndex':cardIndex, 'colIndex':colIndex, 'val': false})"
                        >
                          <v-icon>mdi-chevron-down</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-expand-transition>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { call, sync } from 'vuex-pathify'

export default {
  data: () => ({
    pageTitle : 'Experience professionel',
  }),
  computed: {
    ...sync('pros/', ['PROS']),
  },
  methods : {
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
      max-height: 80% ;
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
