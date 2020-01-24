<template>
  <div>
    <section v-for="(item, key) in blok.card" :key="key">
      <div class="blog-cards" :class="{ 'blog-card--reverse': key === 1 }">
        <div class="blog-card__backgroud" />
        <img :src="item.image.url" class="blog-card__image" :class="{ 'blog-card__image--reverse': key === 1 }" />

        <div class="blog-card__text-container">
          <p class="blog-card__text-container__title">
            {{item.title}}
          </p>
          <p class="blog-card__text-container__description">
            {{item.description}}
          </p>
          <p class="blog-card__text-container__date">
            {{item.date}}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'BlogCard',
  props: ['blok']
}
</script>
<style>

.blog-cards {
  display: flex;
  width: 100%;
  height: 556px;
  margin-bottom: 50px;
}

.blog-cards:first-child {
  margin-top: 40px;
}

.blog-card--reverse {
  flex-direction: row-reverse;
}

.blog-card__backgroud {
  width: 556px;
  height: 556px;
  background-color: #fcf1ef;
}

.blog-card__image {
  margin: 100px 20px 0 -400px;
  width: 50%;
  height: 356px;
  background-color: rebeccapurple;
}

.blog-card__image--reverse {
  margin: 100px -400px 0 20px;
  width: 50%;
  height: 356px;
  background-color: rebeccapurple;
}

.blog-card__text-container {
  width: 50%;
  margin: 20px;
  padding: 150px 80px 0 40px;
}

.blog-card__text-container__title {
  font-size: 26px;
  font-weight: 800;
  color: #2c2c2c;
}

.blog-card__text-container__description {
  font-size: 16px;
  font-weight: normal;
  line-height: 1.63;
  color: #5c5c5c;
}

.blog-card__text-container__date {
  margin-top: 30px;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.63;
  color: #ababab;
}

@media screen and (max-width: 800px){
  .blog-card__backgroud {
    display: none;
  }

  .blog-cards {
    display: block;
    margin-bottom: 100px;
  }

  .blog-card__text-container { 
    width: 100%;
    height: auto;
    display: block;
  }

  .blog-card__text-container__date { 
    text-align: center;
  }

  .blog-card__image {
    display: block;
    width: 100%;
    height: 356px;
    margin: 20px auto;
  }

  .blog-card__text-container {
    margin: 0 auto;
    width: 100%;
    padding: 20px;
  }

  .blog-card__text-container__title {
    margin-bottom: 10px;
  }

}
</style>