<template>
  <div>
    <h2>ShowInfo:{{ name }} - {{ age }}</h2>
    <button @click="showInfobtnClick">showInofButton</button>
  </div>
</template>

<script setup>
// 定义props
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  age: {
    type: Number,
    default: 0
  }
})
// 绑定函数,并且发出事件
const emits = defineEmits(['infoBtnClick'])
function showInfobtnClick(){
  emits("infoBtnClick",'zhangsan')
}
// 定义foo的函数
function foo(){
  console.log('foo function')
}
defineExpose({
  foo
})
</script>

<style scoped></style>