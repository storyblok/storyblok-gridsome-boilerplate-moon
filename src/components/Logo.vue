<template>
  <figure class="logo">
    <g-image :src="imageURL" />
  </figure>
</template>

<script>
export default {
  name: 'Logo',
  props: ['image'],
  computed: {
    imageURL () {
      if (typeof this.image === 'string') {
        return this.image
      }
      const path = this.image.path
      return require('!!assets-loader?width=800&quality=100&fit=inside!~/' + path)
    }
  }
}
</script>

<style>
.logo img {
  max-width: 100%;
}
</style>