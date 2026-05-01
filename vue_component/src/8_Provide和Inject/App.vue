<template>
  <div class="app">
    <Home></Home>
    <h2>App:{{ message }}</h2>
    <button @click="message = 'hello vue'">修改message</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import Home from './Home.vue';
export default {
  components: {
    Home
  },
  data() {
    return {
      message: 'hello world'
    }
  },
  provide() {
    return {
      name: 'tom',
      age: 18,
      // message: computed(() => {
      //   return this.message
      // })
      message: computed(() => this.message)
    }
  }
}
</script>

<style scoped></style>