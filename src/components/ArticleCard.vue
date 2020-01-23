<template>
  <div class="article-card">
    <img :src="blok.image.url" alt="" class="article-card__image">
    <h3 class="article-card__title">
      {{ blok.title }}
    </h3>

    <p class="article-card__description">
      {{ blok.description }}
    </p>

    <p class="article-card__published">
      {{ articlePublished }}
    </p>
  </div>
</template>

<script>
import { getPublishedFormatDate } from '../utils/article'

export default {
  name: 'ArticleCard',
  props: ['blok'],
  computed: {
    articlePublished () {
      return getPublishedFormatDate(this.blok)
    }
  }
}
</script>

<style lang="scss">
.article-card__image {
  width: 100%;
  min-height: 260px;
}

.article-card__title {
  font-size: 40px;
  margin: $desktop-grid-gap 0;
}

.article-card__description {
  font-size: 16px;
  color: $blog-text-color;
  margin-bottom: $desktop-grid-gap;
}

.article-card__published {
  font-size: 16px;
  color: $light-text-color;
}

@media screen and (max-width: 762px) {
  .article-card__title {
    font-size: 28px;
    margin: $mobile-grid-gap 0;
  }

  .article-card__description {
    margin-bottom: $mobile-grid-gap;
  }
}
</style>