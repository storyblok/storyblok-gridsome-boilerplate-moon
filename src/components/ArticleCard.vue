<template>
  <div class="article-card">
    <div class="article-card__image"></div>

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

<style>
.article-card__image {
  width: 100%;
  min-height: 260px;
  background-color: #ededed;
}

.article-card__title {
  color: #2c2c2c;
  font-size: 40px;
  margin: 20px 0;
}

.article-card__description {
  font-size: 16px;
  line-height: 1.63;
  color: #a6a6a6;
  margin-bottom: 20px;
}

.article-card__published {
  font-size: 16px;
  color: #a6a6a6;
}
</style>