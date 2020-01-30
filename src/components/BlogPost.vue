<template>
  <section class="blog-post" v-editable="blok">
    <BlogPostHeader :blok="blok.header" />

    <BlogPostContent :blok="blok.content" />

    <BlogCard :item="setItem" />
  </section>
</template>

<script>
export default {
  name: 'BlogPost',
  props: ['blok'],

  computed: {
    setItem () {
      if (this.blok) {
        if (this.blok.post) {
          return this.blok.post[0].posts[0]
        }
      }
      return ''
    }
  }
}
</script>

<style>

</style>