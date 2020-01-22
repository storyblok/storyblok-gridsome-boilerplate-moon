<template>
  <footer class="footer">
    <Logo :image="blok.logo.url" />
    
    <ul class="footer-links">
      <li 
        v-for="item in blok.map" 
        :key="item.id"> 
          <a :href="item.link.url">
            {{item.name}}
          </a>
      </li>
    </ul>
    

    <button class="footer-btn"><a class="footer-contact_us" :href="blok.contact_link.cached_url">Contact Us</a></button>
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

.footer-btn .footer-contact_us {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}
</style>