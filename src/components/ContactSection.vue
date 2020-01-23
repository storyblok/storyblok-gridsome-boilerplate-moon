<template>
  <section class="contact-us">
    <img :src="blok.image.url" alt="" class="contact-us-right" />
    
    <div class="contact-us-left">
      <h1 class="contact-us-left__title">
        {{ blok.title }}
      </h1>
      <div class="contact-us-left__divisor" />

      <div class="contact-us-left-container">
        <CInput
          id="name"
          placeholder="Enter your name here"
          type="text"
          v-model="name"
          label="Name"
        />

        <CInput
          id="email"
          placeholder="Enter your work email here"
          type="email"
          v-model="email"
          label="Email"
        />

        <CInput
          id="company"
          placeholder="Enter your company name here"
          type="text"
          v-model="company"
          label="Company"
        />

        <button class="button is-primary"> Submit </button>
      </div>
    </div>

  </section>
</template>
<script>
export default {
  name: 'ContactSection',
  props: ['blok'],
  data: () => ({
    name: '',
    email: '',
    company: ''
  })
}
</script>

<style lang="scss">
.contact-us {
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: row-reverse;
  padding-bottom: 20px;
}
.contact-us-left {
  width: 60%; 
  margin-left: 50px;
  margin-right: 50px;
}

.contact-us-right {
  width: 50%;
  max-width: 488px;
  height: auto;
  background-color: #ededed;
}

.contact-us-left__title {
  font-size: 70px;
  font-weight: 600;
}

.contact-us-left__divisor {
  margin: $desktop-grid-gap 0;
  width: 142px;
  height: 3px;
  background-color: $primary-color;
}

.contact-us-left-container {
  width: 100%;
}

.contact-us-left-container .field {
  margin-bottom: $desktop-grid-gap;
}

.contact-us-left-container .button {
  margin: 0 0 0 auto;
}

@media (max-width: 762px) {
  .contact-us { 
    display: block;
    margin: 0 auto;
    position: relative;
    text-align: center;
  }

  .contact-us-right {
    margin: 0 auto;
    width: 100%;
    height: auto;
    align-items: center;
  }

  .contact-us-left-container__input {
    margin-left: 50px;
    width: 80%;
  }

  .contact-us-right, .contact-us-left{
    margin: 0;
    width: 100%;
  }

  .contact-us-left__title {
    padding-top: 10px;
    margin: 0;
  }

  .contact-us-left__divisor {
    margin-left: 50px;
  }

}
</style>