<template>
  <div class="contact-information">
    <p class="contact-information_title">{{blok.title}}</p>
    <p class="contact-information_description">{{blok.description}}</p>
  </div>
</template>
<script>
export default {
  name: 'ContactInformation',
  props: ['blok']
}
</script>
<style>
.contact-information {
  margin: 0 auto;
  width: 90%;
  height: 40px;
}

.contact-information_title {
  font-size: 20px;
  font-weight: 500;
  color: #2c2c2c;
}

.contact-information_description {
  font-size: 16px;
  color: #2c2c2c;
  margin-top: 30px;
}
</style>