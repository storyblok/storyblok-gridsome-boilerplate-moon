<template>
  <div>
    <div class="copyright">
      <p class="copyright-title">Powered by</p>
        <!-- <img class="copyright-image" :src=" 'https://a.storyblok.com/f/51376/x/19b4879a86/logo.svg' " alt=""> -->
      <p class="copyright-label">Storyblok</p>
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
  text-align: center;
}
.copyright-image {
  width: 70px;
  height: 72px;
  filter: grayscale(100%);
}

.copyright-label {
  margin-top: 10px;
  /* filter: grayscale(100%); */
}
</style>