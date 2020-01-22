<template>
  <div class="layout">
    <Teaser :blok="getProperty('header')" />
    <slot/>

    <Metrics :blok="getProperty('metrics')" />

    <Sitemap :blok="getProperty('footer')" />

    <Copyright :blok="getProperty('copyright')" />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  props: {
    globalContent: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    getProperty (prop) {
      return this.globalContent[prop][0] || {}
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
