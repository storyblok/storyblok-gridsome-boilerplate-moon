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

<style>
.articles-section {
  padding: 70px;
}

.articles-section__title {
  font-size: 40px;
  color: #ededed;
  margin-bottom: 60px;
}

.article-section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 70px;
}
</style>