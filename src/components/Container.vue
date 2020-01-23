<template>
  <div class="container">
    <img class="container__image" :src="blok.image.url" alt="">
    <img class="container__image" :src="blok.image.url" alt="">
    
    <div class="container__text">
      <p class="container__text__title">{{blok.title}}</p>
      <div class="conatiner__text__divisor" />
      <p class="container__text__resume">{{blok.resume}}</p>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Container',
  props: ['blok']
}
</script>
<style>
.container {
  max-width: 100% !important;
  flex: 1;
  width: 100%;
  display: flex;
  margin: 0 auto;
  background-color: rgb(148, 144, 144);
}

.container__image {
  filter: brightness(60%);
  width: 50%;
}

.container__image:first-child {
  transform: scaleX(-1);
}

.container__text {
  color: #fff;
  position: absolute;
  margin: 0 auto;
  left: 30%;
  right: 30%;
  top: 50% ;
  text-align: center;
}

.container__text__title {
  font-size: 70px;
  font-weight: 600;
  margin-bottom: 10px;
}

.conatiner__text__divisor {
  margin: 0 auto;
  width: 142px;
  height: 2px;
  background-color: #FFF;
}

.container__text__resume {
  margin-top: 10px;
}

@media (max-width: 800px) {
  .container__text { 
    top: 35%;
  }
  .container__text__title {
    font-size: 35px;
  }
}

@media (max-width: 1100px) {
  .container__text__title {
    top: 35%;
    font-size: 50px;
  }
} 

</style>