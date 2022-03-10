<template>
    <div class="interet">
        <v-btn v-for="interet in interets" :key="interet" class="info">{{ interet }}</v-btn>
    </div>
</template>

<script>
export default {
    props : {
        interets : {
          type: Array,
          default() {
            return []
          }
        }
    }
}
</script>

<style scoped>
.v-btn {
  margin-left: 15px;
  margin-top: 15px;
}
</style>
