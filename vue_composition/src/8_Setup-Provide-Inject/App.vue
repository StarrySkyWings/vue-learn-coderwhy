<template>
  <div>
    <h2>{{ name }}</h2>
    <button @click="name = 'lisi'">app btn</button>
    <ShowInfo></ShowInfo>
  </div>
</template>

<script>
import { provide, ref } from 'vue'
import ShowInfo from './ShowInfo.vue';
export default {
  components:{
    ShowInfo
  },
  setup() {

    const name = ref('zhangsan')
    const age = 18

    provide('name', name)
    provide('age', age)

    return {
      name
    }

  }
}
</script>

<style scoped></style>