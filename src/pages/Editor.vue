<template>
  <Layout
    :global-content="globalData.content">
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </Layout>
</template>

<script>
import { getMetadataToPage } from '../utils/meta-tags'
import StoryblokClient from 'storyblok-js-client'

const getParam = function(val) {
  if (typeof window === 'undefined') {
    return null
  }

  var result = '',
      tmp = []

  window.location.search
    .substr(1)
    .split('&')
    .forEach(function (item) {
      tmp = item.split('=')
      if (tmp[0] === val) result = decodeURIComponent(tmp[1])
  })

  return result
}

const SbClient = new StoryblokClient({
  accessToken: getParam('token') || 'kldAxRYXHaE0nrpdNwffvwtt'
})

const loadStoryblokBridge = function(cb) {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `https://app.storyblok.com/f/storyblok-v2-latest.js`
  script.onload = cb
  document.getElementsByTagName('head')[0].appendChild(script)
}

export default {
  name: "Editor",
  data() {
    return {
      story: {content: {}},
      oldPath: ''
    }
  },
  computed: {
    globalData () {
      return this.$page.global.edges[0].node
    }
  },
  metaInfo () {
    return getMetadataToPage({
      title: 'Editor',
      path: '/editor'
    })
  },
  mounted() {
    loadStoryblokBridge(() => { this.initStoryblokEvents() })
  },
  methods: {
    loadStory() {
      if (getParam('path') !== '') {
        this.oldPath = getParam('path')
      }
      SbClient.get(`cdn/stories/${getParam('path') || this.oldPath}`, {
        version: 'draft',
        resolve_relations: 'blog-post.next_post'
      }).then((res) => {
        this.story = res.data.story
      })
    },
    initStoryblokEvents() {
      this.loadStory()

      let sb = new StoryblokBridge({
        resolveRelations: ['blog-post.next_post']
      })

      sb.on(['change', 'published'], (payload) => {
        this.loadStory()
      })

      sb.on('input', (payload) => {
        if (this.story && payload.story.id === this.story.id) {
          this.story = payload.story
        }
      })

      sb.pingEditor(() => {
        if (sb.isInEditor()) {
          sb.enterEditmode()
        }
      })
    }
  }
}
</script>

<page-query>
{
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