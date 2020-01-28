<template>
  <div class="article-card">
    <figure class="article-card__image">
      <img :src="blok.image" :alt="'Image of the' + blok.title">
    </figure>

    <g-link
      :to="blok.link.cached_url"
      :title="`Check out the post ${blok.title}`"
    >
      <h3 class="article-card__title">
        {{ blok.title }}
      </h3>
    </g-link>

    <p class="article-card__description">
      {{ blok.description }}
    </p>

    <p class="article-card__published">
      {{ articlePublished }}
    </p>

    <g-link
      class="link only-desktop"
      :to="blok.link.cached_url"
      :title="`Check out the post ${blok.title}`"
    >
      <img src="/more-icon.svg" alt="" />
    </g-link>

    <g-link
      class="link only-mobile button is-primary"
      :to="blok.link.cached_url"
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
  overflow: hidden;
}

.article-card__image img {
  max-width: 100%;
  width: 100%;
  transition: all 0.3s ease;
}

.article-card:hover img {
  transform: scale(1.1);
}

.article-card__title {
  font-size: 26px;
  font-weight: 800;
  color: $text-color;
  margin: $desktop-grid-gap 0;
  max-width: 300px;
}

.article-card__description {
  font-size: 16px;
  line-height: 26px;
  color: $blog-text-color;
  margin-bottom: $desktop-grid-gap;
  min-height: 100px;
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