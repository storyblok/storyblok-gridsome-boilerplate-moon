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

      <Pager
        class="pagination-container"
        :info="pageInfo"
        prevLabel="<"
        nextLabel=">"
      />
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

.pagination-container {
  text-align: center;

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 6px 10px;
    margin-right: 10px;
    width: 32px;
    height: 32px;
    border-radius: 3px;
    border: solid 1px #e1e1e1;
    font-size: 16px;
    transition: all 0.3s ease;
    outline: none;

    &:last-child {
      margin-right: 0;
    }

    &:not(.active--exact):hover {
      color: $secondary-color;
      border-color: $secondary-color;
    }
  }

  a.active--exact {
    background-color: $primary-color;
    color: #fff;
    border-color: $primary-color;
  }
}

@media screen and (max-width: $mobile) {
  .blog__title {
    font-size: 35px;
  }
}
</style>

<page-query>
query ($page: Int) {
  posts: allStoryblokEntry (perPage: 2, page: $page, filter: { full_slug: { regex: "blog/*" } }) @paginate {
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