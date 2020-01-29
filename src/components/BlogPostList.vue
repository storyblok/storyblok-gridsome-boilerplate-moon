<template>
  <section class="blog-post-list" v-editable="blok">
    <header>
      <h1 class="blog__title">
        {{ blok.title }}
      </h1>

      <hr class="divisor" />
    </header>
    <div>
      <BlogCard
        v-for="(item, key) in blok.posts"
        :key="key"
        :item="item"
        :reverse="key % 2 === 1"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogPosList',
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

@media screen and (max-width: $mobile) {
  .blog__title {
    font-size: 35px;
  }
}
</style>