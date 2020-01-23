<template>
  <section class="articles-section">
    <h2 class="articles-section__title"> {{ blok.title }} </h2>

    <div class="article-section__grid">
      <ArticleCard
        v-for="(item, key) in blok.list_article_cards"
        :blok="item"
        :key="key"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ArticlesSection',
  props: ['blok']
}
</script>

<style lang="scss">
.articles-section {
  padding: $desktop-container-spacing;
}

.articles-section__title {
  font-size: 40px;
  color: $primary-color;
  margin-bottom: $desktop-grid-gap;
}

.article-section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: $desktop-grid-gap;
}

@media screen and (max-width: 762px) {
  .articles-section {
    padding: $mobile-container-spacing;
  }

  .article-section__grid {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>