<template>
     <div class="page">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <Main-Card/>
     </div>
</template>

<script>

</script>

<style scoped>
.page {
      width: 100%;
      height: 100%;
}


.bg {
  animation:slide 9s ease-in-out infinite alternate;
  background-image: linear-gradient(-50deg, rgb(6, 70, 87) 50%, rgb(0, 48, 182) 50%);
  bottom:0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-50%;
  top:0;
  z-index: 0;
}

.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:5s;
}

.bg3 {
  animation-duration:7s;
}

@keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}
</style>