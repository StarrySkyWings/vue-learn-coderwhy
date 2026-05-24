<template>
  <div class="app">
    <router-view></router-view>
    <!-- <tabBar v-if="!route.meta.hideTabBar"></tabBar> -->
    <tabBar></tabBar>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import tabBar from './components/tab-bar/tab-bar.vue';
const route = useRoute()


</script>

<style scoped></style>