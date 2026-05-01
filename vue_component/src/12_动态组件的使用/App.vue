<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="index">
        <button :class="{ active: currentIndex === index }" @click="itemClick(index)">{{ item }}</button>
      </template>
    </div>
    <div class="view">
      <!-- 第一种做法：v-if进行判断逻辑，决定要显示哪一个组件 -->
      <!-- <template v-if="currentIndex === 0">
        <Home/>
      </template>
      <template v-else-if="currentIndex === 1">
        <About/>
      </template>
      <template v-else-if="currentIndex === 2">
        <Category/>
      </template> -->

      <!-- 第二种做法：动态组件component -->
       <!-- is中的组件需要来自两个地方：全局注册的组件，局部注册的组件 -->
      <component @homeClick="homeClick" name="tom" :age="18" sing="唱歌" :is="tabs[currentIndex]"></component>
    </div>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import About from './views/About.vue';
import Category from './views/Category.vue';
export default {
  components: {
    Home,
    About,
    Category
  },
  data() {
    return {
      tabs: ['Home', 'About', 'Category'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    },
    homeClick(payload){
      console.log('homeClick',payload)
    }
  }
}
</script>

<style scoped>
.active {
  color: red;
}
</style>