<template>
  <g-link class="link" v-bind="$props">
    <img
      src="../assets/images/arrow-icon-large.png"
      alt=""
    />

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
.link {
  color: #2c2c2c;
  display: flex;
  align-items: center;
}

.link img {
  max-width: 30px;
  margin-right: 15px;
}
</style>