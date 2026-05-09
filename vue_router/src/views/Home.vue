<template>
  <div class="home">
    <h2>Home</h2>
    <div>
      <router-link to="/home/recommed" active-class="active">推荐</router-link>
      <router-link to="/home/ranking" active-class="active">排行</router-link>
    </div>

    <button @click="logoutClick">退出登录</button>
    <!-- 占位组件 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
function logoutClick(){
  localStorage.removeItem("token")
}
</script>

<style scoped>
.active {
  color: red;
  font-size: 20px;
}
</style>