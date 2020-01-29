<template>
  <Layout
    :global-content="global.content">
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </Layout>
</template>

<script>
const loadStoryblokBridge = function(cb) {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${process.env.GRIDSOME_SPACE_TOKEN}`
  script.onload = cb
  document.getElementsByTagName('head')[0].appendChild(script)
}

export default {
  name: "Global",
  data() {
    return {
      story: {content: {}},
      global: {content: {}}
    }
  },
  mounted() {
    loadStoryblokBridge(() => { this.initStoryblokEvents() })
  },
  methods: {
    loadStory() {
      window.storyblok.get({
        slug: window.storyblok.getParam('path'),
        version: 'draft'
      }, (data) => {
        this.story = data.story
      })
    },
    async loadGlobalContent() {
      await window.storyblok.get({
        slug: 'global',
        version: 'draft'
      }, (data) => {
        this.global = data.story
      })
    },
    initStoryblokEvents() {
      this.loadStory()
      this.loadGlobalContent()

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