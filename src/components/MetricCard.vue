<template>
  <div class="metric-card">
    <div class="metric-card-container" v-for="item in source" :key="item.id">
      <p class="metric-card-title">{{item.data}}</p>
      <p class="metric-card-description">{{item.description}}</p>
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
  margin-top: 80px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.metric-card-container {
  margin-right: 110px;
  width: 185px;
  height: 60px;
  display: inline-block;
}

.metric-card-title {
  font-size: 40px;
  font-weight: 500;
  color: #2c2c2c;
}

.metric-card-description {
  font-size: 16px;
  line-height: 1.63;
  color: #2c2c2c;
}

</style>