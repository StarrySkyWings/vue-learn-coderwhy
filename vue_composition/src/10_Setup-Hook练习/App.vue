<template>
  <div>
    <h2>App</h2>
    <button @click="changeTitle">修改title</button>
    <!-- 计数器 -->
    <!-- <hr>
    <Home></Home>
    <hr>
    <About></About> -->

    <!-- home和about页面的切换 -->
    <button @click="currentPage = 'home'">Home</button>
    <button @click="currentPage = 'about'">About</button>
    <component :is="currentPage"></component>

    <div class="content"></div>
  </div>
   
</template>

<script>
import Home from './views/Home.vue';
import About from './views/About.vue';
import useTitle from './hooks/useTitle';
import { ref } from 'vue';
export default {
  components: {
    Home,
    About
  },
  setup() {

    const currentPage = ref('home')

    function changeTitle() {
      useTitle('app title')
    }

    return {
      changeTitle,
      currentPage
    }
  }
}
</script>

<style scoped>
.content{
  width: 3000px;
  height: 100px;
  background-color: orange;
}
</style>