<template>
  <div class="team-card">
    <img :src="blok.image.url" alt="" class="team-card__image">

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

<style>
.team-card__image {
  width: 100%;
  min-height: 300px;
  background-color: #ededed;
  margin-bottom: 50px;
}

.team-card__title {
  color: #2c2c2c;
  font-size: 40px;
  margin-bottom: 20px;
}

.team-card__description {
  font-size: 16px;
  color: #a6a6a6;
}
</style>