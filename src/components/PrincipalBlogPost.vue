<template>
  <section class="principal-blog-post" v-editable="blok">
    <div class="principal-blog-post__left">
      <p class="principal-blog-post__published">
        {{ articlePublished }}
      </p>

      <h2 class="principal-blog-post__title">
        {{ blok.title }}
      </h2>

      <hr class="principal-blog-post__divisor divisor" />

      <h3 class="principal-blog-post__description">
        {{ blok.description }}
      </h3>
      <g-link 
        :to="blok.link.cached_url" 
        class="button is-primary" 
        :title="'Link to the post: ' + blok.title">
        Read More
      </g-link>
    </div>

    <div
      class="principal-blog-post__right"
      :style="principalBlogPostStyle"
    />
  </section>
</template>

<script>
import { getPublishedFormatDate } from '../utils/article'

export default {
  name: 'PrincipalBlogPost',
  props: ['blok'],
  computed: {
    articlePublished () {
      if (this.blok) {
        return getPublishedFormatDate(this.blok)
      }
      return ''
    },
    principalBlogPostStyle () {
      return {
        'background-image': `url('https:${this.blok.image}')`
      }
    }
  }
}
</script>

<style lang="scss">
.principal-blog-post {
  width: 100%;
  height: 100vh;
  display: flex;
}

.principal-blog-post__left {
  width: 50%;
  padding: $desktop-container-spacing;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.principal-blog-post__right {
  width: 50%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: top right;
}

.principal-blog-post__published {
  margin-bottom: 10px;
  font-size: 16px;
  color: $light-text-color;
}

.principal-blog-post__title {
  font-size: 65px;
  line-height: 75px;
  font-weight: 600;
}

.principal-blog-post__divisor.divisor {
  margin-left: 0;
  margin-right: 0;
}

.principal-blog-post__description {
  font-size: 16px;
  color: $blog-text-color;
  line-height: 26px;
  margin-bottom: $desktop-grid-gap;
}

@media screen and (max-width: $mobile) {
  .principal-blog-post {
    flex-direction: column;
    justify-content: flex-end;
    height: auto;
  }

  .principal-blog-post__left {
    width: 100%;
    padding: $mobile-container-spacing;
    order: 1;
  }

  .principal-blog-post__right {
    width: 100%;
    order: 0;
    min-height: 708px;
  }

  .principal-blog-post__title {
    font-size: 48px;
    font-weight: 600;
    padding: inherit;
  }

  .principal-blog-post .principal-blog-post__right {
    margin-top: 20px;
    opacity: 30%;
    min-height: 650px;
  }

  .principal-blog-post__left {
    align-items: center;
    position: absolute;
    text-align: center;
  }
  
  .principal-blog-post__title,
  .principal-blog-post__published,
  .principal-blog-post__divisor.divisor,
  .principal-blog-post__description {
    filter: brightness(0.1);
  }

  .principal-blog-post__title { 
    font-weight: bold;
  }

  .principal-blog-post__divisor.divisor {
    align-items: baseline;
  }

  .principal-blog-post__left a {
    z-index: 999;
    background-color: transparent;
  }
}
</style>