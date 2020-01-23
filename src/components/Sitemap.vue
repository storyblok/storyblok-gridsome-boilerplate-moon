<template>
  <footer class="footer">
    <CImage :image="blok.logo" />
    
    <ul class="footer-links">
      <li 
        v-for="item in blok.map" 
        :key="item.id"> 
          <g-link :to="item.link.url">
            {{item.name}}
          </g-link>
      </li>
    </ul>
    
    <g-link class="button is-primary" :to="blok.contact_link.cached_url">
      Contact Us
    </g-link>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: ['blok']
}
</script>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  letter-spacing: normal;
}
.footer .c-image {
  max-width: 120px;
}

.footer .footer-links {
  margin: 0 $desktop-grid-gap; 
}

@media (max-width: 762px) {
  .footer {
    flex-direction: column;
    padding: $mobile-container-spacing;
  }

  .footer-links {
    padding: $mobile-grid-gap * 2 0;
    margin-left: 0;
    margin-right: 0;
    margin: 0 auto;
  }
}
</style>