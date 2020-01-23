<template>
  <section class="blog-section">
    <p class="blog-section__text">{{blok.first_paragraph}}</p>
    <p class="blog-section__text">{{blok.second_paragraph}}</p>
    <p class="blog-section__text">{{blok.third_paragraph}}</p>

    <!-- <Metrics /> -->

    <p class="blog-section__text">{{blok.four_paragraph}}</p>

    <img class="blog-section__image" :src="blok.image.url" alt="">

    <p class="blog-section__text">{{blok.five_paragraph}}</p>
  </section>
</template>
<script>
export default {
  name: 'BlogSection',
  props: ['blok']
}
</script>
<style>
.blog-section {
  width: 60%;
  margin: 0 auto;
}

.blog-section__text {
  font-size: 16px;
  font-weight: normal;
  line-height: 1.63;
  letter-spacing: normal;
  color: #5c5c5c;
  margin-bottom: 28px;
}

.blog-section__image {
  width: 100%;
}


</style>