<template>
  <section class="about-content">
    <h2 class="about-content__title"> {{ blok.headline }} </h2>

    <hr class="about-content__divisor" />

    <h3 class="about-content__subtitle"> {{ blok.subtitle }} </h3>
  </section>
</template>

<script>
export default {
  name: 'AboutContent',
  props: [ 'blok' ]
}
</script>

<style>
.about-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}

.about-content__title {
  font-size: 70px;
  font-weight: 600;
}

.about-content__divisor {
  max-width: 150px;
  height: 5px;
  margin: 40px auto;
  background-color: #2c2c2c;
}

.about-content__subtitle {
  font-size: 16px;
  color: #a6a6a6;
}
</style>