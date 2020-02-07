<template>
  <Layout
    :global-content="$context.globalContent.content"
  >
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </Layout>
</template>

<script>
export default {
  name: 'StoryblokEntryTemplate',
  metaInfo () {
    return {
      title: this.story.name
    }
  },
  computed: {
    story () {
      return this.$page.storyblokEntry
    }
  }
}
</script>

<page-query>
query StoryblokEntry ($id: ID) {
  storyblokEntry (id: $id) {
    id
    name
    slug
    content
  }
}
</page-query>