<template>
  <section class="contact-us">
    <div class="contact-us-left">
      <h1 class="contact-us-left__title">{{blok.title}}</h1>
      <div class="contact-us-left__divisor" />
      <div class="contact-us-left-container">
        <input class="contact-us-left-container__input" type="text">
        <input class="contact-us-left-container__input" type="text">
        <input class="contact-us-left-container__input" type="text">
      </div>
    </div>

    <div class="contact-us-right" />
  </section>
</template>
<script>
export default {
  name: 'ContactSection',
  props: ['blok']
}
</script>
<style>
.contact-us {
  width: 90%;
}
.contact-us-left {
  width: 708px; 
}

.contact-us-right {
  width: 488px;
  height: 753px;
  background-color: #ededed;
}

.contact-us-left__title {
  font-size: 70px;
  font-weight: 600;
}

.contact-us-left-container {
  display: inline-grid;
}

.contact-us-left-container__input {
  margin-bottom: 30px;
}

.contact-us-left__divisor {
  margin: 40px 0;
  width: 142px;
  height: 5px;
  background-color: #2c2c2c;
}
</style>