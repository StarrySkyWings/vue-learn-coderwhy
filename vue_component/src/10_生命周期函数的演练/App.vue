<template>
  <h2>{{ message }} - {{ counter }}</h2>
  <button @click="message = 'hello world'">修改message</button>
  <button @click="counter++">+1</button>

  <div>
    <button @click="isShowHome = !isShowHome">显示Home</button>
    <Home v-if="isShowHome"></Home>
  </div>
</template>

<script>
import Home from './Home.vue';
export default {
  components: {
    Home
  },
  data() {
    return {
      message: 'hello App',
      counter: 0,
      isShowHome: true
    }
  },
  // 1.组件被创建之前
  beforeCreate() {
    console.log('beforeCreate')
  },
  // 2.组件被创建完成
  created() {
    console.log('created')
    console.log('发送网络请求，请求数据')
    console.log('监听eventbus事件')
    console.log('监听watch数据')
  },
  // 3.组件template准备被挂载
  beforeMount() {
    console.log('beforeMount')
  },
  // 4.组件template被挂载：虚拟DOM -> 真实DOM
  mounted() {
    console.log('mounted')
    console.log('获取DOM')
    console.log('使用DOM')
  },
  // 5.数据发送改变
  // 准备更新DOM
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  // 更新DOM
  updated() {
    console.log('updated')
  },
  // 准备卸载VNode -> DOM元素
  // 卸载之前
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  // DOM元素被卸载完成
  unmounted() {
    console.log('unmounted')
  }
}
</script>

<style scoped></style>