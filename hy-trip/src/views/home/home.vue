<template>
  <div class="home">
    <homeNavBar></homeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSearchBox></homeSearchBox>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
import useHomeStore from '@/stores/modules/home';
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
// import hyRequest from '@/services/request/index'

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
// 1.热门建议
// const hotSuggests = ref([])
// hyRequest.get({
//   url:'/home/hotSuggests'
// }).then(res => {
//   hotSuggests.value = res.data
// })


</script>

<style lang="less" scoped>
.banner{
  img{
    width: 100%;
  }
}

</style>