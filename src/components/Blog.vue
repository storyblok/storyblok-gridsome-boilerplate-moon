<template>
  <div class="blog">
    <h1 class="blog__title">{{blok.title}}</h1>
    <hr class="divisor" />
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
  font-weight: 600;
  color: #000000;
}

.divisor {
  margin: $desktop-grid-gap auto;
  width: 150px;
  height: 2px;
  background-color: $text-color;
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