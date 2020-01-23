<template>
  <section class="team">
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

<style>
.team {
  padding: 70px;
}

.team__title {
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 50px;
}

.team__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 70px;
}

@media screen and (max-width: 762px) {
  .team {
    padding: 20px;
  }

  .team__grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 70px;
  }
}
</style>