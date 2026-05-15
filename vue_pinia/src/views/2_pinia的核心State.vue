<template>
  <div class="home">
    <h2>Home View</h2>
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <h2>level:{{ level }}</h2>
    <button @click="changeState">修改state</button>
    <button @click="resetState">重置state</button>
  </div>
</template>

<script setup>
import useUser from '@/stores/use';
import { storeToRefs } from 'pinia';

const userStore = useUser()

const { name, age, level } = storeToRefs(userStore)

function changeState() {
  // 一个个修改状态
  // userStore.name = 'jack',
  // userStore.age = 20
  // userStore.level = 200

  // 一次性修改多个状态
  // userStore.$patch({
  //   name: 'jack',
  //   age: 35
  // })

  // 替换state为新的对象
  
  const oldState = userStore.$state
  console.log(oldState)
  userStore.$state = {
    name: 'marry',
    level: 200
  }
  console.log(oldState === userStore.$state)
  console.log(userStore.$state)
}

function resetState() {
  userStore.$reset()
}
</script>

<style scoped></style>