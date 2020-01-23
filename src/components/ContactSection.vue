<template>
  <section class="contact-us">
    <img :src="blok.image.url" alt="" class="contact-us-right" />
    
    <div class="contact-us-left">
      <h1 class="contact-us-left__title">{{blok.title}}</h1>
      <div class="contact-us-left__divisor" />
      <div class="contact-us-left-container">
        
        <!-- <label for="input_name" class="contact-us-left__label" >Name</label> -->
        <input 
          id="input_name"
          class="contact-us-left-container__input" 
          type="text" 
          placeholder="Enter your name here"
        />
        
        <!-- <label for="input_email" class="contact-us-left__label" >Email</label> -->
        <input 
          id="input_email"
          class="contact-us-left-container__input" 
          type="text" 
          placeholder="Enter your work email here"
        />
        
        <!-- <label for="input_company" class="contact-us-left__label" >Company name</label> -->
        <input 
          id="input_company"
          class="contact-us-left-container__input" 
          type="text" 
          placeholder="Enter your company name here"
        />
      </div>
    </div>

  </section>
</template>
<script>
export default {
  name: 'ContactSection',
  props: ['blok']
}
</script>
<style>
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

.contact-us-left-container {
  width: 100%;
  display: inline-grid;
}

.contact-us-left-container__input {
  font-size: 16px;
  width: 85%;
  height: 77px;
  border-radius: 3px;
  border: solid 1px #e5e5e5;
  background-color: #ffffff;
  margin-bottom: 30px;
  transition: all .2s ease-in-out;
}
.contact-us-left-container__input::-webkit-input-placeholder  {
  color: #cdcdcd;
}

.contact-us-left-container__input:focus {
   border: solid 1px #ccb48b;
}

.contact-us-left__label {
  position: absolute;
  display: block;
  font-weight: normal;
  left: 0;
  margin: 0;
  padding: 18px 12px 0;
  top: 0;
}

.contact-us-left__divisor {
  margin: 40px 0;
  width: 142px;
  height: 5px;
  background-color: #2c2c2c;
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