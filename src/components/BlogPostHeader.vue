<template>
  <div class="blog-post-header">
    <img class="blog-post-header__image" :src="headerData.image.url" alt="">
    
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
      alt=""
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
    }
  }
}
</script>

<style lang="scss">
.blog-post-header {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  bottom: -20px;
  transform: translateX(-50%);
}

.blog-post-header__text__summary {
  margin-top: 10px;
}

@media (max-width: $mobile) {
  .blog-post-header {
    display: block;
    min-height: auto;
  }

  .blog-post-header__image {
    width: 100%;
    position: relative;
  }

  .blog-post-header__text {
    color: $primary-color;
    padding: $desktop-grid-gap $mobile-container-spacing;
  }

  .blog-post-header__text__title {
    font-size: 35px;
  }

  .blog-post-header__text__divisor {
    background-color: $primary-color;
  }

  .blog-post-header .arrow-down-icon {
    display: none;
  }
}

@media (max-width: 1100px) {
  .blog-post-header__text__title {
    top: 35%;
    font-size: 50px;
  }
} 

</style>