<template>
  <nav class="navigation">
    <ul>
      <li
        v-for="(item, key) in items"
        :key="key"
      >
        <g-link
          :to="item.link.cached_url"
          class="link"
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
  }
}
</script>

<style>
.navigation ul {
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  margin: 0 auto;
  text-transform: capitalize;
}

.navigation li {
  font-size: 16px;
  font-weight: 600;
}
</style>