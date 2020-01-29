<template>
  <div class="metric-card" v-editable="source">
    <div class="metric-card-container">
      <p class="metric-card-title">{{ source.data }}</p>
      <p class="metric-card-description">{{ source.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MetricCard',
  props: ['source'],
}
</script>

<style>
.metric-card {
  width: 100%;
}

.metric-card-title {
  font-size: 40px;
  font-weight: 500;
  color: #2c2c2c;
}

.metric-card-description {
  font-size: 16px;
  color: #2c2c2c;
}

@media (max-width: 762px) {
  .metric-card {
    flex-direction: column;
  }

  .metric-card-container {
    margin-right: 0;
    text-align: center;
    margin-top: 20px;
  }
}

</style>