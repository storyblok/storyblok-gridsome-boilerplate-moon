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
      if (this.blok.length) {
        return this.$storyapi.richTextResolver.render(this.blok)
      }
      
      return ''
    }
  }
}
</script>

<style lang="scss">
.blog-post-content {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: $desktop-container-spacing;
  font-size: 16px;
  color: $blog-text-color;
  line-height: 26px;
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