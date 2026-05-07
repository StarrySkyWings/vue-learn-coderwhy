<template>
  <div>
    <h2>message:{{ message }}</h2>
    <button @click="message = '你好呀，李银河！'">修改message</button>
    <button @click="info.friend.name = 'lisi'">修改info</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
  setup() {

    // 定义数据
    const message = ref('hello world')
    const info = reactive({
      name: 'zhangsan',
      age: 18,
      friend: {
        name: 'wangwu'
      }
    })

    // 侦听数据的变化
    watch(message, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })
    // watch(info, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    //   console.log(newValue === oldValue)
    // }, {
    //   immediate: true
    // })

    // 监听reactive对象获取普通对象
    watch(() => ({...info}), (newValue, oldValue) => {
      console.log(newValue, oldValue)
    },{
      immediate:true,
      deep:true
    })

    return {
      message,
      info
    }
  }
}
</script>

<style scoped></style>