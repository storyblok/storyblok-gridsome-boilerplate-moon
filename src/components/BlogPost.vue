<template>
  <section class="blog-post">
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