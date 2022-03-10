<template>
    <div class="btn-container">
        <v-btn v-for="competence in competences" :key="competence" small class="background">{{ competence }}</v-btn>
    </div>
</template>

<script>
    export default {
        props : {
            competences : {
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
    margin-top: 5px;
    margin-right: 5px;
}
</style>
