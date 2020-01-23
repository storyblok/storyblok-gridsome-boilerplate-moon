<template>
  <header class="teaser">
    <CImage :image="blok.logo" />
    <Navigation :items="blok.navigation" />
  </header>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss">
.teaser {
  padding: $desktop-container-spacing $desktop-container-spacing + 20px;
}

.teaser .c-image {
  max-width: 180px;
  margin: 0 auto $desktop-inner-spacing auto;
}

@media screen and (max-width: 523px) {
  .teaser {
    padding: $mobile-container-spacing;
  }

  .teaser .c-image {
    margin-bottom: $mobile-inner-spacing;
  }
}
</style>