<template>
  <div class="app">
    <!-- name属性 -->
    <!-- <keep-alive include="home">
      <router-view></router-view>
    </keep-alive> -->
    <router-view v-slot="props">
      <keep-alive include="home,favor,order">
        <component :is='props.Component'></component>
      </keep-alive>
    </router-view>
    <tabBar v-show="!route.meta.hideTabBar"></tabBar>
    <!-- <tabBar></tabBar> -->
    <loading></loading>
    
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import tabBar from './components/tab-bar/tab-bar.vue';
import loading from './components/loading/loading.vue';

const route = useRoute()


</script>

<style scoped>

</style>