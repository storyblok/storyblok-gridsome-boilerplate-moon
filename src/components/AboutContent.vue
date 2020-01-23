<template>
  <section class="about-content">
    <div class="about-content__headlines">
      <h2 class="about-content__title"> {{ blok.headline }} </h2>

      <hr class="about-content__divisor" />

      <h3 class="about-content__subtitle"> {{ blok.subtitle }} </h3>
    </div>    

    <div class="about-content__grid">
      <div class="about-content__markdown">
        <div v-html="markdown" />
      </div>

      <div class="about-content__image">
        <CImage :image="blok.image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutContent',
  props: [ 'blok' ],
  computed: {
    markdown () {
      return this.$storyapi.richTextResolver.render(this.blok.text)
    }
  }
}
</script>

<style>
.about-content {
  padding: 40px 70px 70px 70px;
}

.about-content__headlines {
  max-width: 700px;
  margin: 0 auto 60px auto;
}

.about-content__title {
  font-size: 65px;
  font-weight: 600;
  text-align: center;
}

.about-content__divisor {
  max-width: 150px;
  height: 2px;
  margin: 40px auto;
  background-color: #2c2c2c;
}

.about-content__subtitle {
  font-size: 16px;
  color: #a6a6a6;
}

.about-content__grid {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 70vh;
}

.about-content__grid::after {
  content: '';
  position: absolute;
  top: -40px;
  left: 0;
  width: 80%;
  height: 60%;
  z-index: 1;
  background-color: #fffcf8;
}

.about-content__image,
.about-content__markdown {
  width: 50%;
  height: 100%;
  z-index: 2;
}

.about-content__image {
  background-color: #ededed;
}

.about-content__markdown {
  padding: 70px 70px 0 0;
}

.about-content__markdown p:first-of-type {
  margin-bottom: 10px;
}

@media screen and (max-width: 762px) {
  .about-content {
    padding: 20px;
  }

  .about-content__grid {
    flex-direction: column;
    justify-content: flex-end;
    height: auto;
  }

  .about-content__grid::after {
    width: 0;
    height: 0;
  }

  .about-content__image {
    width: 100%;
    order: 0;
    margin-bottom: 20px;
  }

  .about-content__markdown {
    width: 100%;
    order: 1;
    padding: 0;
  }
}
</style>