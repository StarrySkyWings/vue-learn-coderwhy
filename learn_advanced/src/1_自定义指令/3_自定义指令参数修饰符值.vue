<template>
  <div class="App">
    <button @click="counter++">+1</button>
    <!-- 参数-修饰符-值 -->
    <h2 v-why:tom.abc.cba="message">哈哈哈</h2>
    
    <!-- 价格拼接单位符号 -->
     <h2 v-unit>{{ 111 }}</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)

const message = '你好呀，李银河'

const vWhy = {
  mounted(el,bindings) {
    console.log(bindings)
    el.textContent = bindings.value
  },

}

</script>

<style scoped></style>