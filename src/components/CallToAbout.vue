<template>
  <div class="call-to-about" v-editable="blok">
    <div class="call-to-about-mask"></div>
    
    <div
      class="call-to-about-image"
      :style="callToAboutImageStyle"
    >
      <g-link
        class="link only-desktop"
        to="/about"
        title="Go to About Us page"
      >
        <img src="/more-icon.svg" alt="" />
      </g-link>
    </div>

    <div class="call-to-about-section">
      <h2 class="call-to-about-section_title">{{blok.title}}</h2>

      <p class="call-to-about-section_description">{{blok.description}}</p>

      <g-link
        class="link button is-primary only-mobile about-button"
        to="/about"
        title="Go to About page"
      >
        Check out!
      </g-link>
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
  },
  computed: {
    callToAboutImageStyle () {
      return {
        'background-image': `url(https:${this.blok.image})`
      }
    }
  }
}
</script>

<style lang="scss">
.call-to-about {
  padding-top: $desktop-grid-gap;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.call-to-about .link {
  margin-top: 20px;
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
  margin-left: -278px;
  margin-top: 100px;
}

.call-to-about-image .link {
  position: absolute;
  right: -34px;
  bottom: 15%;
  opacity: 0;
  transition: all 0.3s ease;
}

.call-to-about:hover .call-to-about-image .link {
  opacity: 1;
}

.call-to-about-section {
  width: 556px;
  height: 356px;
  margin-top: 100px;
  padding-left: $desktop-grid-gap;
  padding-right: $desktop-grid-gap;
}

.call-to-about-section_title {
  font-size: 65px;
  font-weight: 800;
  line-height: 1.15;
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
    width: 95%;
    float: none;
  }

  .call-to-about-section {
    width: 100%;
    height: auto;
    margin: 0;
    padding: $mobile-container-spacing;
    text-align: center;
  }

  .call-to-about-section_title { 
    margin-top: 0px;
    font-size: 65px;
    font-weight: bold;
    line-height: 1.10;
    font-size: 50px;
  }

  .about-button {
    margin: 0 auto;
  }

} 

</style>