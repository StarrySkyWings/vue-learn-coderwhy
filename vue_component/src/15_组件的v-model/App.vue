<template>
  <div class="app">
    <!-- input v-model -->
    <!-- <input type="text" v-model="message"> -->
    <!-- <input type="text" :value="message" @input="message = $event.target.value"> -->

    <!-- 组件的v-model -->
    <!-- <Counter v-model="appCounter"></Counter> -->
    <!-- <Counter :modelValue="appCounter" @update:modelValue="appCounter = $event"></Counter> -->

    <!-- 组件的v-model:自定义名称counter -->
    <Counter2 v-model:counter="appCounter" v-model:name="appName"/>
  </div>
</template>

<script>
import Counter from './Counter.vue';
import Counter2 from './Counter2.vue';
export default {
  components: {
    Counter,
    Counter2
  },
  data() {
    return {
      message: "hello world",
      appCounter: 100,
      appName:'Tom'
    }
  },
  
}
</script>

<style scoped></style>