<template>
    <div class="formation ml-5">
        <h2 class="cv--text">{{ formation.titre }}</h2>
        <h3>{{ formation.lieu }}</h3>
        <div class="span-container">
            <p class="float-right">{{ formation.periode }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['formation']

    }
</script>

<style scoped>
 h2 {
    font-size: 1.1rem;
    margin-top: 10px;
    margin-bottom: 5px;
 }
 h3 {
     font-size: 0.9rem;
 }
 .span-container {
    margin-top: -55px;
}
span.date {
    float: right;
}
.formation {
    border-bottom: solid 1px #80808061;
    margin-bottom: 15px;
    padding-bottom: 10px;
    height: 60px;
}
</style>
