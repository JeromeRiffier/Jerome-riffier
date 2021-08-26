<template>
    <div class="interet">
        <v-btn class="info" v-for="Interet in Interets" :key="Interet">{{ Interet }}</v-btn>
    </div>
</template>

<style scoped>
.v-btn {
    margin-left: 15px;
    margin-top: 15px;
}
</style>

<script>
export default {
    props : {
        Interets : Array
    }
}
</script>