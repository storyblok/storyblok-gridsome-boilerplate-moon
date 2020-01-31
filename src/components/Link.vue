<template>
  <g-link class="link" v-bind="$props" :title="'Link to ' + title">
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