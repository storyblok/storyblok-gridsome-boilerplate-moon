<template>
  <nav class="navigation">
    <ul v-for="(item, key) in items" :key="key">
      <li> {{ item.link.cached_url }} </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: ['items']
}
</script>

<style>

</style>