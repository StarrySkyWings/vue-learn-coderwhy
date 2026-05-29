<template>
  <div class="app">
    <router-view></router-view>
    <tabBar v-if="!route.meta.hideTabBar"></tabBar>
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