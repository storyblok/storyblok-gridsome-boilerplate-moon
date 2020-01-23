<template>
  <div>
    <div class="copyright">
      <img class="copyright-image" :src="blok.logo.url" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Copyright',
  props: ['blok']
}
</script>

<style lang="scss">
.copyright {
  padding: $desktop-container-spacing;
  text-align: center;
  margin-bottom: 30px;
}

.copyright-image {
  width: 91px;
  height: auto; 
}

@media (max-width: 762px) {
  .copyright {
    padding: $mobile-container-spacing;
  }
}
</style>