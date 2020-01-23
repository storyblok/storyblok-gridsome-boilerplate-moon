<template>
  <div class="container">
    <img class="container__image" :src="blok.image.url" alt="">
    <img class="container__image" :src="blok.image.url" alt="">

  </div>
</template>
<script>
export default {
  name: 'Container',
  props: ['blok']
}
</script>
<style>
.container {
  max-width: 100% !important;
  flex: 1;
  width: 100%;
  display: flex;
  margin: 0 auto;
}

.container__image {
  filter: brightness(60%);
  width: 50%;
}

.container__image:first-child {
  transform: scaleX(-1);
}


</style>