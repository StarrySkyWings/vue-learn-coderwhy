<template>
  <div class="app">
    <h2>app</h2>
    <div class="nav">
      <router-link to="/home" active-class="active" replace>首页</router-link>
      <!-- <router-link :to="{ path: '/home' }" active-class="active" replace>首页</router-link> -->
      <router-link to="/about" active-class="active" replace>关于</router-link>
      <router-link to="/user/123" active-class="active">用户123</router-link>
      <router-link to="/user/321" active-class="active">用户321</router-link>
      <router-link to="/order" active-class="active">订单</router-link>

      <!-- 其他元素跳转 -->
      <span @click="homeSpanClick">首页</span>
      <button @click="aboutBtnClick">关于</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
// 监听元素的点击
function homeSpanClick() {
  // 跳转到首页
  // router.push('/home')
  router.push({
    // name:'home'
    path: '/home'
  })
}
function aboutBtnClick() {
  // 跳转到关于
  // router.push('/about')
  router.push({
    path: '/about',
    query: {
      name: 'tom',
      age: 18
    }
  })
}
</script>

<style scoped>
.active {
  color: red;
  font-size: 20px;
}
</style>