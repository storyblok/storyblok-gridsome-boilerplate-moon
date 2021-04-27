<template>
  <figure class="c-image">
    <g-image
      :src="imageURL"
      :alt="alt"
      :title="title"
      v-if="imageURL"
    />
  </figure>
</template>

<script>
export default {
  name: 'CImage',
  props: ['image', 'alt', 'title'],
  computed: {
    imageURL () {
      if (typeof this.image === 'string') {
        return this.image
      }

      if (typeof this.image === 'object' && this.image.fieldtype === 'asset') {
        if (typeof this.image.filename === 'object') {
          return this.image.filename.url
        }
        return this.image.filename
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
  width: 100%;
  max-width: 100%;
}
</style>