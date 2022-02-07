<template>
    <v-dialog
      v-model="dialog"
      width="500"
      max-width="fit-content"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          height="auto"
          class="pa-2"
          v-on="on">
          <v-img v-if="item.companyLogo" :src="item.companyLogo" max-width="300" max-height="140" contain></v-img>
          <h2
            v-else
            :class="`${item.date.color}--text`"
            class="py-3 my-8"
          >
            {{ item.title }}
          </h2>
        </v-btn>
      </template>

      <v-sheet class="py-4 transparent"  :class="classAlternate">
        <v-card-title  :class="`pt-0 headline font-weight-light mb-4 ${item.date.color}--text`">
          <v-img v-if="item.companyLogo" :src="item.companyLogo" max-width="300" max-height="150" contain></v-img>
          <h2 v-else>{{ item.title }}</h2>
        </v-card-title>
        <v-card-subtitle> {{ item.town }}</v-card-subtitle>
        <v-card-text v-if="item.description"  style="white-space: break-spaces;">{{ item.description }}</v-card-text>
        <v-row>
          <v-col
            v-for="n in item.techLogo.length"
            :key="n"
            :cols="Math.floor(12 / item.techLogo.length)"
            class="d-flex child-flex"
          >
            <v-img
              :src="item.techLogo[n-1]"
              max-height="50px"
              contain
            ></v-img>
          </v-col>
        </v-row>
      </v-sheet>
    </v-dialog>
</template>

<script>
export default {
  props : {
    item :  Array,
    index : Number
  },
  data() {
    return {
    }
  },
  computed: {
    classAlternate () {
      return this.index % 2 === (0 || 1) ? 'float-right' : 'float-left';
    }
  }
}
</script>

<style scoped>
  .v-btn{
    background-color: transparent!important;
    box-shadow: none!important;
    width: fit-content!important;
  }

</style>
