<template>
  <figure class="c-image">
    <g-image :src="imageURL" alt="Image of logo" v-if="imageURL" />
  </figure>
</template>

<script>
export default {
  name: 'CImage',
  props: ['image'],
  computed: {
    imageURL () {
      if (typeof this.image === 'string') {
        return this.image
      }
      const path = this.image.path || ''
      if (path === '' || path === undefined) {
        return ''
      }
      return require('!!assets-loader?width=800&quality=100&fit=inside!~/' + path)
    }
  }
}
</script>

<style>
.c-image img {
  max-width: 95%;
}
</style>