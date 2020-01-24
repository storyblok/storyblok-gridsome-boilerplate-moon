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

    <g-link
      class="link only-desktop"
      :to="blok.link"
      :title="`Check out the post ${blok.title}`"
    >
      <img src="../assets/images/more-ico.svg" alt="" />
    </g-link>

    <g-link
      class="link only-mobile button is-primary"
      :to="blok.link"
      :title="`Check out the post ${blok.title}`"
    >
      Read the article
    </g-link>
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
$svg-width: 60px;

.article-card {
  position: relative;
}

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

.article-card .link.only-desktop {
  position: absolute;
  top: 25%;
  right: -$svg-width / 2;
  opacity: 0;
  transition: all 0.3s ease;
}

.article-card .link.only-desktop img {
  width: $svg-width;
  height: $svg-width;
}

.article-card:hover .link.only-desktop {
  opacity: 1;
}

.article-card .link.only-mobile {
  margin-top: $mobile-grid-gap;
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