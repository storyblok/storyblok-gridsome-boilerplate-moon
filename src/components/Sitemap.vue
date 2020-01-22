<template>
  <footer class="footer">
    <Logo :image="blok.logo.url" />
    
    <ul class="footer-links">
      <li 
        v-for="item in blok.map" 
        :key="item.id"> 
          <g-link :to="item.link.url">
            {{item.name}}
          </g-link>
      </li>
    </ul>
    
    <g-link class="button" :to="blok.contact_link.cached_url">
      Contact Us
    </g-link>
  </footer>
</template>

<script>
import Logo from './Logo'
export default {
  name: 'Footer',
  props: ['blok'],
  components: {
    Logo
  }
}
</script>

<style>
.footer {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: 104px;
  line-height: 1.63;
  letter-spacing: normal;
}
.footer .logo {
  max-width: 120px;
}

.footer .footer-links {
  margin-right: 220px;
  margin-left: 100px; 
}

.footer-btn {
  width: 265px;
  height: 70px;
  background-color: #2c2c2c;
}

@media (max-width: 762px) {
  .footer {
    flex-direction: column;
  }

  .footer .footer-links {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 0;
    margin-right: 0;
    margin: 0 auto;
  }

  .footer .logo {
    margin-top: 20px;
    max-width: 120px;
  }
}
</style>