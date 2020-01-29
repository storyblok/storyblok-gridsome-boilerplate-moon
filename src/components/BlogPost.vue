<template>
  <section class="blog-post" v-editable="blok">
    <BlogPostHeader :blok="blok.header" />

    <BlogPostContent :blok="blok.content" />
  </section>
</template>

<script>
export default {
  name: 'BlogPost',
  props: ['blok']
}
</script>

<style>

</style>