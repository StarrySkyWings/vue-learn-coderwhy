<template>
  <div>
    <h2>message:{{ message }}</h2>
    <button @click="changeMessage">修改message</button>
    <ShowInfo ref="showInfoRef" name="tom" :age="18" @info-btn-click="infoBtnClick"></ShowInfo>
  </div>
</template>

<script setup>
// 所有编写在顶层中的代码，都是默认暴露给template可以使用
import { ref,onMounted } from 'vue'
import ShowInfo from './ShowInfo.vue';

// 定义响应式数据
const message = ref('hello world')
console.log(message)

// 定义绑定的函数
function changeMessage() {
  message.value = 'hello app'
}
function infoBtnClick(payload) {
  console.log('监听到showInfo内部的点击：', payload)
}

// 获取组件实例
const showInfoRef = ref()
onMounted(() => {
  showInfoRef.value.foo()
})

</script>

<style scoped></style>