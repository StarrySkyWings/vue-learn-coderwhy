<template>
  <div class="app">
    <!-- 高评价 -->
    <RoomArea :area-data="highScore"></RoomArea>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RoomArea from './components/RoomArea.vue';
// 获取数据
// import highScore from './data/high_score.json'
// console.log(highScore)

// 模拟网络请求数据
const highScore = ref({})
setTimeout(() => {
  import('./data/high_score.json').then(res => {
    highScore.value = res.default
  })
},1000)


</script>

<style scoped lang="less">
.app {
  width: 1032px;
  margin: 0 auto;
  padding: 40px;
}
</style>