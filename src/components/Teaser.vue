<template>
  <header class="teaser">
    <Navigation :items="blok.navigation" />
  </header>
</template>

<script>
export default {
  props: ['blok']
}
</script>