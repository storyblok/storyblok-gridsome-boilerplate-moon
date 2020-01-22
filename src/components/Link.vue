<template>
  <g-link class="link" v-bind="$props">
    <span>{{ name }}</span>
  </g-link>
</template>

<script>
export default {
  name: 'Link',
  props: [ 'to', 'title', 'name' ]
}
</script>

<style>
</style>