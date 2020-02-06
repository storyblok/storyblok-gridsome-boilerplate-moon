<template>
  <div v-editable="blok">
    <div class="copyright">
      <a href="https://storyblok.com" title="Link to Storyblok site"> 
        <img class="copyright-image" :src="imageLink" alt="Image of the logo" v-if="imageLink">
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
      if(this.blok) {
        if (typeof(this.blok.logo) === 'object') {
          return this.blok.logo.url
        } else {
          return this.blok.logo
        }
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