<template>
  <div>
    <h2>message:{{ message }}</h2>
    <button @click="changeMessage">修改message</button>
    <hr>
    <h2>账号:{{ account.username }}</h2>
    <h2>密码:{{ account.password }}</h2>
    <button @click="changeAccount">修改账号</button>
    <hr>
    <!-- 默认情况下在template中使用ref时,vue回自动对其进行解包（取出其中value） -->
    <h2>当前计数:{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="counter++">+1</button>
    <button @click="decrement">-1</button>

    <hr>
    <!-- 使用的时候不需要写.value -->
    <h2>当前计数:{{ info.counter }}</h2>
    <!-- 修改的时候需要写.value -->
    <button @click="info.counter.value++">+1</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {

    // 定义普通的数据：可以正常访问
    // 缺点：数据不是响应式
    let message = 'hello world'
    function changeMessage() {
      message = '你好呀,李银河'
    }

    // 定义响应式数据
    // reactive函数：定义复杂类型的数据
    const account = reactive({
      username: 'zhangsan',
      password: '123456'
    })
    function changeAccount(){
      account.username = 'lisi'
    }

    // ref函数：定义简单类型的数据（也可以定义复杂类型的数据）
    // counter定义响应式数据
    let counter = ref(0)
    const increment = () => {
      counter.value++
    }
    const decrement = () => {
      counter.value--
    }

    // ref是浅层解包
    const info = {
      counter
    }

    return {
      message,
      changeMessage,
      account,
      changeAccount,
      counter,
      increment,
      decrement,
      info
    }
  }
}
</script>

<style scoped></style>