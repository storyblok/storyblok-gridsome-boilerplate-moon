<template>
  <div>
    <div class="copyright">
      <img class="copyright-image" :src="blok.logo.url" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Copyright',
  props: ['blok']
}
</script>

<style>
.copyright {
  margin-top: 150px;
  text-align: center;
  margin-bottom: 30px;
}
.copyright-image {
  width: 91px;
  height: auto; 
}

</style>