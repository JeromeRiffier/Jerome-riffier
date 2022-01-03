<template>
  <div class="resizer">

  </div>
</template>

<script>
export default {
  name: "resizer"
}
</script>

<style scoped>
.resizer {
  right: 42px;
  top: 52px;
  bottom: 42px;
  width: 10px;
  position: absolute;
  cursor: e-resize;
  transition: background  ease-in-out 0.1s ;
}
.resizer:hover {
  background-color: #3b3432;
}
</style>
