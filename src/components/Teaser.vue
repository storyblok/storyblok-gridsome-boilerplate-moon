<template>
  <header class="teaser">
    <Logo :image="blok.logo" />
    <Navigation :items="blok.navigation" />
  </header>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style>
.teaser {
  padding: 50px 70px;
}

.teaser .logo {
  max-width: 180px;
  margin: 0 auto 50px auto;
}
</style>