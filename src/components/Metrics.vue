<template>
  <div class="metrics" v-editable="blok">
    <div
      class="metric__column"
      v-for="item in blok.columns"
      :key="item.id">
      <MetricCard :source="item" />
    </div>
  </div>
</template>

<script>
import MetricCard from './MetricCard'

export default {
  name: 'Metrics',
  components: {
    MetricCard
  },
  props: ['blok']
}
</script>

<style lang="scss">
.metrics {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: $desktop-container-spacing * 2;
}

.metric__column {
  margin: 0 $desktop-grid-gap;
}

@media screen and (max-width: 762px) {
  .metrics {
    flex-direction: column;
    padding: $mobile-container-spacing * 2;
  }

  .metric__column {
    margin: $mobile-grid-gap 0;
  }
}
</style>