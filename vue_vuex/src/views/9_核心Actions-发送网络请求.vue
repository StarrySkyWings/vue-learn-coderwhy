<template>
  <div class="home">
    <h2>Home Page</h2>
    <ul>
      <template :key="item.acm" v-for="item in $store.state.banners">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script>
</script>

<script setup>
import { useStore } from 'vuex';

// 告诉Vuex发起网络请求
const store = useStore()
store.dispatch('fetchHomeMultidataAction')
// store.dispatch('fetchHomeMultidataAction').then(res => {
//   console.log('home中的then被回调：', res)
// })

</script>

<style scoped></style>