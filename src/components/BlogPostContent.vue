<template>
  <article class="blog-post-content">
    {{ blok }}
  </article>
</template>

<script>
export default {
  name: 'BlogPostContent',
  props: ['blok'],
}
</script>

<style lang="scss">
.blog-section {
  widows: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: $desktop-container-spacing;
}

.blog-section__text {
  font-size: 16px;
  font-weight: normal;
  line-height: 1.63;
  letter-spacing: normal;
  color: #5c5c5c;
  margin-bottom: 28px;
}

.blog-section__image {
  width: 100%;
}

.blog-section__first {
  display: flex;
  height: auto;
}

.blog-section__first__text:first-child {
  margin: 0;
  font-size: 70px;
  font-weight: 600;
  color: black;
}

.blog-section__first__text {
  margin: 30px 0 0 10px;
  display: inline;
  color: #5c5c5c;
} 

</style>