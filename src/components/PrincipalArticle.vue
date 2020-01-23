<template>
  <section class="principal-article">
    <div class="principal-article__left">
      <p class="principal-article__published">
        {{ articlePublished }}
      </p>
      <h2 class="principal-article__title">
        {{ blok.title }}
      </h2>

      <div class="principal-article__divisor" />

      <h3 class="principal-article__description">
        {{ blok.description }}
      </h3>
      
      <g-link :to="blok.link.cached_url" class="button is-primary">
        Read Article
      </g-link>
    </div>

    <img :src="blok.image" class="principal-article__right" />
  </section>
</template>

<script>
import { getPublishedFormatDate } from '../utils/article'

export default {
  name: 'PrincipalArticle',
  props: ['blok'],
  computed: {
    articlePublished () {
      return getPublishedFormatDate(this.blok)
    }
  }
}
</script>

<style lang="scss">
.principal-article {
  width: 100%;
  height: 100vh;
  display: flex;
}

.principal-article__left {
  width: 50%;
  padding: $desktop-container-spacing;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.principal-article__right {
  width: 50%;
  height: 100%;
}

.principal-article__published {
  margin-bottom: 10px;
  font-size: 16px;
  color: $light-text-color;
}

.principal-article__title {
  font-size: 70px;
  font-weight: 600;
}

.principal-article__divisor {
  margin: $desktop-grid-gap 0;
  width: 142px;
  height: 2px;
  background-color: $primary-color;
}

.principal-article__description {
  font-size: 16px;
  color: $blog-text-color;
  line-height: 1.63;
  margin-bottom: $desktop-grid-gap;
}

@media screen and (max-width: 762px) {
  .principal-article {
    flex-direction: column;
    justify-content: flex-end;
    height: auto;
  }

  .principal-article__left {
    width: 100%;
    padding: $mobile-container-spacing;
    order: 1;
  }

  .principal-article__right {
    width: 100%;
    order: 0;
  }

  .principal-article__title {
    font-size: 48px;
    font-weight: 600;
  }
}
</style>