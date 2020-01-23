<template>
  <div class="field">
    <label :for="id">
      {{ label }}
    </label>

    <input
      :value="value"
      @input="event => $emit('input', event.target.value)"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  name: 'CInput',
  props: [
    'id',
    'value',
    'label'
  ]
}
</script>

<style lang="scss">
.field {
  position: relative;
  width: 100%;
}

.field input {
  position: relative;
  width: 100%;
  display: block;
  border: none;
  background-color: #ffffff;
  padding: 45px 20px 15px 20px;
  border-radius: 3px;
  border: solid 1px #e5e5e5;
  font-size: 16px;
  transition: all .2s ease-in-out;
  color: $primary-color;
}

.field input::-webkit-input-placeholder  {
  color: $light-text-color;
}

.field input:focus {
  border-color: $secondary-color;
}

.field label {
  position: absolute;
  top: 20px;
  left: 20px;
  color: #414141;
  z-index: 2;
  font-size: 13px;
}
</style>