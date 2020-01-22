<template>
  <div>
    <MetricCard :source="blok.columns"/>
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

<style>

</style>