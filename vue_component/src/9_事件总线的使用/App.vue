<template>
  <div class="app">
    <h2>App Message:{{ message }}</h2>
    <Home></Home>
    <button @click="isShow = !isShow">是否显示category</button>
    <Category v-if="isShow"></Category>
  </div>
</template>

<script>
import Home from './Home.vue';
import eventBus from './utils/event-bus';
import Category from './Category.vue';
export default {
  components: {
    Home,
    Category
  },
  data() {
    return {
      message: 'hello world',
      isShow: true
    }
  },
  created() {
    eventBus.on("tomEvent", (name, age, height) => {
      console.log('tomEvent事件在app中监听', name, age, height)
      this.message = `name:${name},age:${age},height:${height}`
    })
  }
}
</script>

<style scoped></style>