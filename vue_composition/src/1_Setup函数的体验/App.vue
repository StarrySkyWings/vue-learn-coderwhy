<template>
  <div class="app">
    <h2>当前计数:{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
// import { ref } from 'vue'
import useCounter from './hooks/useCounter';
export default {
  setup() {
    // 默认定义的数据都不是响应式数据
    // let counter = ref(0)
    // const increment = () => {
    //   counter.value++
    // }
    // const decrement = () => {
    //   counter.value--
    // }
    // const { counter, increment, decrement } = useCounter()

    return {
      // counter,
      // increment,
      // decrement
      ...useCounter()
    }
  }
}
</script>

<style scoped></style>