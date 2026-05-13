<template>
  <div class="home">
    <h2>当前计数:{{ $store.state.counter }}</h2>
    <!-- <button @click="counterBtnClick">发起action修改counter</button> -->
    <button @click="incrementAction">发起action修改counter</button>
    <button @click="increment">递增counter</button>
    <h2>name:{{ $store.state.name }}</h2>
    <!-- <button @click="nameBtnClick">发起action修改name</button> -->
    <button @click="changeNameAction('jack')">发起action修改name</button>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
export default {
  methods:{
    // counterBtnClick(){
    //   this.$store.dispatch('incrementAction')
    // },
    // nameBtnClick(){
    //   this.$store.dispatch('changeNameAction','jack')
    // }
    ...mapActions(['incrementAction','changeNameAction'])
  }
}
</script>

<script setup>
import { mapActions, useStore } from 'vuex';

const store = useStore()

// 在setup中使用mapActions辅助函数
// const actions = mapActions(['incrementAction','changeNameAction'])
// const newActions = {}
// Object.keys(actions).forEach(key => {
//   newActions[key] = actions[key].bind({$store:store})
// })
// const {incrementAction,changeNameAction} = newActions

// 使用默认的做法
function increment(){
  store.dispatch('incrementAction')
}
</script>

<style scoped></style>