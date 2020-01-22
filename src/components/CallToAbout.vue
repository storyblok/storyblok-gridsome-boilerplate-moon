<template>
  <div class="call-to-about">
    <div class="call-to-about-mask"></div>
    
    <div class="call-to-about-image">
      <!-- <img :src="blok.image.url" alt=""> -->
    </div>

    <div class="call-to-about-section">
      <h2 class="call-to-about-section_title">{{blok.title}}</h2>
      <p class="call-to-about-section_description">{{blok.description}}</p>
      <Link class="call-to-about-section_link" :to="blok.link.cached_url" name="Find out More" />
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

<style>
.call-to-about {
  padding-top: 20px;
  /* width: 90%; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.call-to-about-mask {
  width: 556px;
  height: 556px;
  background-color: #f8f8f8;
}

.call-to-about-image {
  width: 556px;
  height: 356px;
  background-color: #ededed;
  float: left;
  position: relative;
  margin-left: -150px;
  margin-top: 100px;
}

.call-to-about-section {
  width: 556px;
  height: 356px;
  margin-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
}

.call-to-about-section_title {
  font-size: 40px;
  font-weight: 500;
  color: #2c2c2c;
  margin-top: 40px;
}

.call-to-about-section_description {
  font-size: 16px;
  color: #a6a6a6;
  line-height: 1.63;
  margin-top: 40px;
}

.call-to-about-section_link {
  margin-top: 40px;
}
</style>