<template>
  <div class="App">
    <h2 v-if="showTitle" class="title" v-why>当前计数:{{ counter }}</h2>
    <button @click="counter++">+1</button>
    <button @click="showTitle = false">隐藏</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)
const showTitle = ref(true)

const vWhy = {
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('update')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('ummounted')
  },

}

</script>

<style scoped></style>