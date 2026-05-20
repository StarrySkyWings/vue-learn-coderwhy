<template>
  <div class="app">
    <router-view></router-view>
    <tabBar></tabBar>
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/favor">收藏</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/message">消息</router-link> -->
  </div>
</template>

<script setup>
import tabBar from './components/tab-bar/tab-bar.vue';

</script>

<style scoped></style>