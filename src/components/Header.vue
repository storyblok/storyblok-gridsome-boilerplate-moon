<template>
  <header class="header" v-editable="blok">
    {{ blok }}
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['blok']
}
</script>

<style>

</style>