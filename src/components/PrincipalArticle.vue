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

      <g-link :to="blok.link.cached_url" class="button">Read Article</g-link>
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

<style>
.principal-article {
  width: 100%;
  height: 100vh;
  display: flex;
}

.principal-article__left {
  width: 50%;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.principal-article__right {
  background-color: #ededed;
  width: 50%;
  height: 100%;
}

.principal-article__published {
  margin-bottom: 10px;
  font-size: 16px;
  color: #a6a6a6;
}

.principal-article__title {
  font-size: 70px;
  font-weight: 600;
}

.principal-article__divisor {
  margin: 40px 0;
  width: 142px;
  height: 5px;
  background-color: #2c2c2c;
}

.principal-article__description {
  font-size: 16px;
  color: #a6a6a6;
  line-height: 1.63;
  margin-bottom: 50px;
}

@media screen and (max-width: 762px) {
  .principal-article {
    flex-direction: column;
    justify-content: flex-end;
    height: auto;
  }

  .principal-article__left {
    width: 100%;
    padding: 40px;
    order: 1;
  }

  .principal-article__right {
    width: 100%;
    height: 80vh;
    order: 0;
  }
}
</style>