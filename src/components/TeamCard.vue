<template>
  <div class="team-card">
    <img 
      :src="blok.image.url" 
      :alt="'Image of the astronaut ' + blok.name" 
      class="team-card__image"
    >

    <h3 class="team-card__title">
      {{ blok.name }}
    </h3>

    <p class="team-card__description">
      {{ blok.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TeamCard',
  props: ['blok']
}
</script>

<style lang="scss">
.team-card__image {
  width: 100%;
  min-height: 300px;
}

.team-card__title {
  font-size: 26px;
  font-weight: bold;
  color: $text-color;
  margin: $mobile-grid-gap 0;
}

.team-card__description {
  font-size: 16px;
  color: $blog-text-color;
  line-height: 26px;
}
</style>