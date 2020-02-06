<template>
  <div
    class="blog-cards"
    :class="{ 'blog-card--reverse': reverse }"
    v-editable="item"
  >
    <div
      class="blog-card__backgroud"
      :style="{ 'backgroundColor': item.metadata_color }"
    />

    <div
      class="blog-card__image"
      :class="{ 'blog-card__image--reverse': reverse }"
    >
      <img :src="item.image" :alt="'Image of the ' + item.title" />

      <g-link :to="item.link.cached_url" :title="'Link to the article ' + item.title">
        <img class="only-desktop" src="/more-icon.svg" alt="" />
      </g-link>
    </div>

    <div class="blog-card__text-container">
      <g-link
        :to="item.link.cached_url"
        :title="'Link to the article ' + item.title"
        class="blog-card__text-container__title"
      >
        {{item.title}}
      </g-link>
      <p class="blog-card__text-container__description">
        {{item.description}}
      </p>
      <p class="blog-card__text-container__date">
        Space {{articlePublished}}
      </p>

      <g-link 
        :to="item.link.cached_url" 
        class="only-mobile link button is-primary"
        :title="'Link to the article ' + item.title"
      >
        Read the article
      </g-link>
    </div>
  </div>
</template>

<script>
import { getPublishedFormatDate } from '../utils/article'
export default {
  name: 'BlogCard',
  props: ['item', 'reverse'],
  computed: {
    articlePublished () {
      if (this.item) {
        return getPublishedFormatDate(this.item)
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
.blog-cards {
  display: flex;
  width: 100%;
  margin-bottom: 50px;
}

.blog-cards:first-child {
  margin-top: 40px;
}

.blog-card--reverse {
  flex-direction: row-reverse;
}

.blog-card__backgroud {
  width: 556px;
  height: 556px;
}

.blog-card__image {
  position: relative;
  margin: 100px 20px 0 -400px;
}

.blog-card__image--reverse {
  position: relative;
  margin: 100px -400px 0 20px;
}

.blog-card__image img {
  max-width: 100%;
  height: 356px;
}

.blog-card__image .only-desktop,
.blog-card__image--reverse .only-desktop {
  position: absolute;
  bottom: 25%;
  width: $desktop-container-spacing;
  height: $desktop-container-spacing;
  transition: all 0.3s ease;
  opacity: 0;
}

.blog-card__image .only-desktop {
  right: -25px; 
}

.blog-card__image--reverse .only-desktop {
  left: -25px;
}

.blog-cards:hover .only-desktop {
  opacity: 1;
}

.blog-card__text-container {
  width: 50%;
  margin: 20px;
  padding: 150px 80px 0 40px;
}

.blog-card__text-container__title {
  font-size: 26px;
  font-weight: 800;
  color: #2c2c2c;
}

.blog-card__text-container__description {
  font-size: 16px;
  font-weight: normal;
  line-height: 1.63;
  color: #5c5c5c;
  margin: $mobile-grid-gap * 2 0;
}

.blog-card__text-container__date {
  margin-top: 30px;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.63;
  color: #ababab;
}

@media screen and (max-width: 800px){
  .blog-card__backgroud {
    display: none;
  }

  .blog-cards {
    display: block;
    margin-bottom: 0px;
  }

  .blog-card__text-container { 
    width: 95%;
    height: auto;
    display: block;
  }

  .blog-card__image {
    display: block;
    width: 100%;
    height: 356px;
    margin: 20px auto;
    max-width: 95%;
  }

  .blog-card__text-container {
    margin: 0 auto;
    width: 100%;
    padding: 20px;
  }

  .blog-card__text-container__title {
    margin-bottom: 10px;
  }

  .blog-cards .link.only-mobile {
    // margin-top: $mobile-grid-gap * 2;
    margin: $mobile-grid-gap auto;

  }
}
</style>