<template>
  <nav class="navigation" v-editable="items">
    <ul>
      <li
        v-for="(item, key) in items"
        :key="key"
      >
        <g-link
          :to="item.link.cached_url"
          class="link"
          :class="{
            'active--exact active': checkActiveClass(item.link)
          }"
          :title=" 'Link to ' + item.name + ' page'"
        >
          {{ item.name }}
        </g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    items: {
      type: Array,
      defaut: () => []
    }
  },
  computed: {
    isIndexRoute () {
      return this.$route.path === '/'
    },
    isBlogRoute () {
      return this.$route.path.indexOf('blog/') !== -1
    }
  },
  methods: {
    inHomeRouteLink (link) {
      return link.cached_url === 'home'
    },
    inBlogRouteLink (link) {
      return link.cached_url.indexOf('blog/') !== -1
    },
    checkActiveClass (link) {
      const homeCondition = this.isIndexRoute && this.inHomeRouteLink(link)
      const blogCondition = this.isBlogRoute && this.inBlogRouteLink(link)
      return homeCondition || blogCondition
    }
  }
}
</script>

<style lang="scss">
.navigation ul {
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  margin: 0 auto;
  text-transform: capitalize;
}

.navigation .link {
  position: relative;
  font-size: 18px;
  font-weight: normal;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  outline: none;
}

.navigation .link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: -10%;
  width: 0;
  height: 2px;
  background-color: $secondary-color;
  transition: all 0.3s ease-in-out;
}

.navigation .link:hover,
.link.active--exact {
  color: $secondary-color;
}

.navigation .link:hover::after,
.link.active--exact::after {
  width: 120%;
}
</style>