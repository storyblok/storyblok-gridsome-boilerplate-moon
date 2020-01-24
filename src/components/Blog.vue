<template>
  <div class="blog">
    <h1 class="blog__title">{{blok.title}}</h1>
    <div class="divisor" />
  </div>
</template>
<script>
export default {
  name: 'Blog',
  props: ['blok']
}
</script>
<style lang="scss">
.blog__title {
  text-align: center;
  font-size: 65px;
  font-weight: 800;
  color: #000000;
}

.divisor {
  margin: $mobile-grid-gap * 2 auto;
  width: 150px;
  height: 2px;
  background-color: $primary-color;
}

@media screen and (max-width: $mobile) {
  .blog {
    margin-top: $desktop-container-spacing;
  }

  .blog__title {
    font-size: 35px;
  }
}
</style>