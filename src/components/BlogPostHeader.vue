<template>
  <div
    class="blog-post-header"
    :style="blogPostHeaderStyle"
    v-editable="blok"
  >
    <div class="blog-post-header__text">
      <h1 class="blog-post-header__text__title">
        {{ headerData.title }}
      </h1>

      <div class="blog-post-header__text__divisor" />

      <h2 class="blog-post-header__text__summary">
        {{ headerData.summary }}
      </h2>
    </div>

    <img
      class="arrow-down-icon"
      src="/arrow-down-icon.svg"
      alt="Icon of a arrow down"
    >
  </div>
</template>

<script>
export default {
  name: 'BlogPostHeader',
  props: ['blok'],
  computed: {
    headerData () {
      return this.blok[0] || {}
    },
    blogPostHeaderStyle () {
      return {
        'background-image': `url(https:${this.headerData.image.url})`
      }
    }
  }
}
</script>

<style lang="scss">
.blog-post-header {
  position: relative;
  width: 100%;
  min-height: 708px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-origin: top;
  background-repeat: no-repeat;
  background-size: cover;
}

.blog-post-header__image {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
}

.blog-post-header__text {
  max-width: 700px;
  color: #fff;
  text-align: center;
  z-index: 2;
}

.blog-post-header__text__title {
  font-size: 70px;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 1.15;
}

.blog-post-header__text__divisor {
  margin: $desktop-grid-gap auto;
  width: 150px;
  height: 2px;
  background-color: #FFF;
}

.blog-post-header .arrow-down-icon {
  position: absolute;
  left: 50%;
  bottom: -34px;
  transform: translateX(-50%);
}

.blog-post-header__text__summary {
  margin-top: 10px;
}

@media screen and (min-width: 1440px) {
  .blog-post-header {
    background-position: center;
  }
}

@media screen and (max-width: 1200px) {
  .blog-post-header {
    min-height: 455px;
    background-size: cover;
  }
}

@media screen and (max-width: 900px) {
  .blog-post-header {
    min-height: 455px;
    background-size: cover;
  }
}

@media screen and (max-width: 800px) {
  .blog-post-header {
    min-height: 395px;
    background-size: cover;
  }
}

@media screen and (max-width: $mobile) {
  .blog-post-header {
    background-size: cover;
  }

  .blog-post-header__image {
    width: 100%;
    position: relative;
  }

  .blog-post-header__text {
    padding: $desktop-grid-gap $mobile-container-spacing;
  }

  .blog-post-header__text__title {
    font-size: 35px;
  }
}
</style>