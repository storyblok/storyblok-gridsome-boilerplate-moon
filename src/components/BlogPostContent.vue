<template>
  <article class="blog-post-content">
    <div v-html="content"></div>
  </article>
</template>

<script>
export default {
  name: 'BlogPostContent',
  props: ['blok'],
  computed: {
    content () {
      return this.$storyapi.richTextResolver.render(this.blok)
    }
  }
}
</script>

<style lang="scss">
.blog-post-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: $desktop-container-spacing;
}

.blog-post-content p {
  margin-bottom: 20px;
}

.blog-post-content p:first-child:first-letter {
  font-size: 40px;
  font-weight: 600;
}

.blog-post-content img {
  max-width: 100%;
  margin: 0 auto;
  display: block;
}

@media screen and (max-width: $mobile) {
  .blog-post-content {
    padding: $mobile-container-spacing;
  }
}
</style>