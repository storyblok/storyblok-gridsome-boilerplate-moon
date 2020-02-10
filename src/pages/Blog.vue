<template>
  <Layout :global-content="globalData.content">
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

      <Pager :info="pageInfo" />
    </section>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'

export default {
  name: 'Blog',
  components: { Pager },
  computed: {
    globalData () {
      return this.$page.global.edges[0].node
    },
    posts () {
      return this.$page.posts.edges.map(edge => edge.node)
    },
    pageInfo () {
      return this.$page.posts.pageInfo
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

<page-query>
query {
  posts: allStoryblokEntry (filter: { full_slug: { regex: "blog/*" } }) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        full_slug
        content
      }
    }
  }

  global: allStoryblokEntry (filter: { slug: { eq: "global" } }) {
    edges {
      node {
        id
        full_slug
        content
      }
    }
  }
}
</page-query>