<template>
  <div v-editable="blok">
    <div class="copyright">
      <a href="https://storyblok.com" title="Link to Storyblok site"> 
        <img class="copyright-image" :src="imageLink" alt="Image of the logo">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Copyright',
  props: ['blok'],
  computed: {
    imageLink() {
      if (this.blok) {
        return this.blok.logo.filename.url
      }
      return false
    }
  }
}
</script>

<style lang="scss">
.copyright {
  padding: $desktop-container-spacing;
  text-align: center;
  margin-bottom: 30px;
  margin-top: $desktop-container-spacing ;
}

.copyright-image {
  width: 91px;
  height: auto; 
}

@media (max-width: 762px) {
  .copyright {
    padding: $mobile-container-spacing;
  }
}
</style>