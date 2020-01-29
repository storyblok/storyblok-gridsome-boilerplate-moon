<template>
  <section class="team" v-editable="blok">
    <h2 class="team__title">
      {{ blok.title }}
    </h2>

    <div class="team__grid">
      <TeamCard
        v-for="(item, key) in blok.columns"
        :key="key"
        :blok="item"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Team',
  props: ['blok']
}
</script>

<style lang="scss">
.team {
  padding: $desktop-container-spacing;
}

.team__title {
  font-size: 45px;
  font-weight: bold;
  margin-bottom: $desktop-grid-gap;
}

.team__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: $desktop-grid-gap;
}

@media screen and (max-width: 762px) {
  .team {
    padding: $mobile-container-spacing;
  }

  .team__grid {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>