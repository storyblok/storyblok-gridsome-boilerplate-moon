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

const getParam = function(val) {
  var result = '',
      tmp = []

  location.search
    .substr(1)
    .split('&')
    .forEach(function (item) {
      tmp = item.split('=')
      if (tmp[0] === val) result = decodeURIComponent(tmp[1])
  })

  return result
}

const loadStoryblokBridge = function(cb) {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${getParam('token')}`
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
      window.storyblok.get({
        slug: getParam('path') || this.oldPath,
        version: 'draft'
      }, (data) => {
        this.story = data.story
      })
    },
    initStoryblokEvents() {
      this.loadStory()

      let sb = window.storyblok

      sb.on(['change', 'published'], (payload) => {
        this.loadStory()
      })

      sb.on('input', (payload) => {
        if (this.story && payload.story.id === this.story.id) {
          payload.story.content = sb.addComments(payload.story.content, payload.story.id)
          this.story = payload.story
        }
      })

      sb.pingEditor(() => {
        if (sb.inEditor) {
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