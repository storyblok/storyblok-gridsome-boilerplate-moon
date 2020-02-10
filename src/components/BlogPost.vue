<template>
  <section class="blog-post" v-editable="blok">
    <BlogPostHeader :blok="blok" />
    <BlogPostContent :blok="blok.content" />

    <BlogCard
      :item="blok.next_post.content"
      :reverse="false"
      :url="blok.next_post.full_slug"
      v-if="blok.next_post && blok.next_post.content"
    />
  </section>
</template>

<script>
export default {
  name: 'BlogPost',
  props: ['blok']
}
</script>
