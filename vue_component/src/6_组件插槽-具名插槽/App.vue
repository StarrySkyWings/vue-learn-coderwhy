<template>
  <div class="app">
    <NavBar>
      <template #left>
        <button>返回</button>
      </template>
      <template #center>
        <span>内容</span>
      </template>
      <template #right>
        <a href="#">登录</a>
      </template>
    </NavBar>

    <NavBar>
      <template v-slot:[position]>
        <a href="#">注册</a>
      </template>
    </NavBar>
    <button @click="position = 'left'">左边</button>
    <button @click="position = 'center'">中间</button>
    <button @click="position = 'right'">右边</button>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  components: {
    NavBar
  },
  data() {
    return {
      position: 'center'
    }
  }
}
</script>

<style scoped></style>