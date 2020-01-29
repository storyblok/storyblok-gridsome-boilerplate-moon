<template>
  <section class="blog-post-section" v-editable="blok">
    <h2 class="blog-post-section__title"> {{ blok.title }} </h2>

    <div class="blog-post-section__grid">
      <BlogSectionCard
        v-for="(item, key) in blok.list_article_cards"
        :blok="item"
        :key="key"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogPostSection',
  props: ['blok']
}
</script>

<style lang="scss">
.blog-post-section {
  padding: $desktop-container-spacing;
}

.blog-post-section__title {
  font-size: 45px;
  font-weight: bold;
  line-height: 75px;
  color: $primary-color;
  margin-bottom: $desktop-grid-gap;
}

.blog-post-section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: $desktop-grid-gap;
}

@media screen and (max-width: 762px) {
  .blog-post-section {
    padding: $mobile-container-spacing;
  }

  .blog-post-section__grid {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>