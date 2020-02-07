<template>
  <section class="blog-post" v-editable="blok">
    <BlogPostHeader :blok="blok.header" />

    <BlogPostContent :blok="blok.content" />

    <BlogCard
      :item="nextPost.content"
      :reverse="false"
      :url="nextPost.full_slug"
    />
  </section>
</template>

<script>
export default {
  name: 'BlogPost',
  props: ['blok'],

  computed: {
    nextPostUuid () {
      return this.blok.next_post
    },
    hasNextPost () {
      return Object.keys(this.nextPost).length > 0
    },
    posts () {
      return this.$static.allStoryblokEntry.edges.map(({ node }) => node)
    },
    nextPost () {
      const result = this.posts.filter(post => post.uuid === this.nextPostUuid)

      if (result.length) {
        return result[0] || {}
      }

      return {}
    }
  }
}
</script>

<static-query>
{
  allStoryblokEntry {
    totalCount
    edges {
      node {
        uuid
        full_slug
        content
      }
    }
  }
}
</static-query>