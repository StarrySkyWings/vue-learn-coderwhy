<template>
  <div class="app">
    <Home/>
    <About/>
    <Category/>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import About from './views/About.vue';
import Category from './views/Category.vue';
export default {
  components:{
    Home,
    About,
    Category
  }
}
</script>

<style scoped></style>