<template>
    <h3 data-tooltip="Lu / Écrit / Parlé" data-inverted="" data-position="left center">
        Anglais 
        <span class="level not"></span>
        <span class="level"></span>
        <span class="level"></span>
        <span class="level"></span>
        <span class="level"></span>
    </h3>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
 h3 {
    padding-right: 40% !important;
    font-size: 1.1rem !important;
    margin-top: 15px !important;
}
span.level.not {
    height: 20px !important;
    width: 20px !important;
    margin-left: 5px !important;
    background-color: white !important;
    border: solid 2px !important;
    border-color: #4f90cd !important;
    border-radius: 50% !important;
    display: inline-block !important;
}
span.level {
    height: 20px !important;
    width: 20px !important;
    margin-left: 5px !important;
    background-color: #4f90cd !important;
    border-radius: 50% !important;
    display: inline-block !important;
    margin-top: 3px;
}
</style>