<template>
  <div class="call-to-about">
    <div class="call-to-about-mask"></div>
    
    <img class="call-to-about-image" :src="blok.image" alt="">

    <div class="call-to-about-section">
      <h2 class="call-to-about-section_title">{{blok.title}}</h2>
      <p class="call-to-about-section_description">{{blok.description}}</p>
    </div>
    
  </div>
</template>

<script>
import Link from './Link'

export default {
  name: 'CallToAbout',
  props: ['blok'],
  components: {
    Link
  }
}
</script>

<style lang="scss">
.call-to-about {
  padding-top: $desktop-grid-gap;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.call-to-about-mask {
  width: 556px;
  height: 556px;
  background-color: #edf6fb;
}

.call-to-about-image {
  width: 556px;
  height: 356px;
  float: left;
  position: relative;
  margin-left: -150px;
  margin-top: 100px;
}

.call-to-about-section {
  width: 556px;
  height: 356px;
  margin-top: 100px;
  padding-left: $desktop-grid-gap;
  padding-right: $desktop-grid-gap;
}

.call-to-about-section_title {
  font-size: 40px;
  font-weight: 500;
  color: $primary-color;
  margin-top: $desktop-grid-gap;
}

.call-to-about-section_description {
  font-size: 16px;
  color: $blog-text-color;
  line-height: 1.63;
  margin-top: $desktop-grid-gap;
}

@media (max-width: 762px) {
  .call-to-about {
    display: inline;
  }

  .call-to-about-mask {
    display: none;
  }

  .call-to-about-image {
    margin: 0 auto;
    width: 100%;
    float: none;
  }

  .call-to-about-section {
    width: 100%;
    height: auto;
    margin: $mobile-grid-gap;
    padding: $mobile-container-spacing;
  }
  .call-to-about-section_title { 
    margin-top: 0px;
  }
} 

</style>