<template>
    <h3 data-tooltip="Lu / Écrit / Parlé" data-inverted="" data-position="left center" class=" info--text pb-5">
        Anglais
        <span class="level info"></span>
        <span class="level info"></span>
        <span class="level info"></span>
        <span class="level info"></span>
        <span class="level info not"></span>
    </h3>
</template>

<script>
    export default {
    }
</script>

<style scoped>
 h3 {
    padding-right: 20% !important;
    font-size: 1.1rem !important;
    margin-top: 15px !important;
}
span.level.not {
    height: 20px !important;
    width: 20px !important;
    margin-left: 5px !important;
    background-color: white !important;
    border: solid 2px !important;
    border-radius: 50% !important;
    display: inline-block !important;
}
span.level {
    vertical-align: sub;
    height: 20px !important;
    width: 20px !important;
    margin-left: 5px !important;
    border-radius: 50% !important;
    display: inline-block !important;
    margin-top: 3px;
}
</style>
