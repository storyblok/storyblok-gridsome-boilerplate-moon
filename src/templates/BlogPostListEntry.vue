<template>
  <Layout
    :global-content="$context.globalContent.content"
  >
    <section class="blog-post-list">
      <header>
        <h1 class="blog__title"> Our Stories </h1>

        <hr class="divisor" />
      </header>

      <div>
        <BlogCard
          v-for="(item, key) in posts"
          :key="key"
          :item="item.content"
          :url="item.full_slug"
          :reverse="key % 2 === 1"
        />
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  name: 'BlogPostListEntry',
  metaInfo: {
    title: 'Blog Posts'
  },
  computed: {
    posts () {
      return this.$context.posts.filter(post => post.full_slug !== 'blog/')
    }
  }
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