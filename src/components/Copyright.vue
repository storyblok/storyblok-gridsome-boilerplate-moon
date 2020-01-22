<template>
  <div>
    <div class="copyright">
      <p class="copyright-title">Powered by</p>
      <img class="copyright-image" src="../assets/images/colored-full.svg" alt="">
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
.copyright-title {
  color: #bfc4cb;
  font-size: 12px;
  margin-bottom: 5px;
}
.copyright {
  margin-top: 150px;
  text-align: center;
  margin-bottom: 30px;
}
.copyright-image {
  width: 91px;
  height: 20px;
}

</style>