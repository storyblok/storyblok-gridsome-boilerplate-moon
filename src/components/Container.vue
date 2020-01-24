<template>
  <div class="blog-post-header">
    <img class="blog-post-header__image" :src="blok.image.url" alt="">
    <img class="blog-post-header__image" :src="blok.image.url" alt="">
    
    <div class="blog-post-header__text">
      <p class="blog-post-header__text__title">{{blok.title}}</p>
      <div class="conatiner__text__divisor" />
      <p class="blog-post-header__text__resume">{{blok.resume}}</p>
    </div>

    <img
      class="arrow-down-icon"
      src="../assets/images/arrow-down-icon.svg"
      alt=""
    >
  </div>
</template>

<script>
export default {
  name: 'BlogPostHeader',
  props: ['blok']
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
  width: 50%;
  filter: brightness(60%);
}

.blog-post-header__image:first-child {
  transform: scaleX(-1);
  top: 0;
  left: 0;
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

.conatiner__text__divisor {
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

.blog-post-header__text__resume {
  margin-top: 10px;
}

@media (max-width: 800px) {
  .blog-post-header__text { 
    top: 35%;
  }
  .blog-post-header__text__title {
    font-size: 35px;
  }
}

@media (max-width: 1100px) {
  .blog-post-header__text__title {
    top: 35%;
    font-size: 50px;
  }
} 

</style>