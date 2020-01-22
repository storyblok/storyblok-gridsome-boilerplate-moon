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

@media screen and (max-width: 523px) {
  .teaser {
    padding: 40px;
  }

  .teaser .logo {
    margin-bottom: 40px;
  }
}
</style>