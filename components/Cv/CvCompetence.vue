<template>
    <div class="btn-container">
        <v-btn small class="info" v-for="competence in competences" :key="competence">{{ competence }}</v-btn>
    </div>
</template>

<script>
    export default {
        props : {
            competences : Array
        }
    }
</script>

<style scoped>
.v-btn {
    margin-top: 5px;
    margin-right: 5px;
}
</style>