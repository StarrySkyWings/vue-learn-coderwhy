<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>
    <transition name="test">
      <h2 v-if="isShow">hello world</h2>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(false)

</script>

<style scoped>
h2 {
  display: inline-block;
}

.test-leave-to,
.test-enter-from {
  opacity: 0;
  transform: scale(0.6);
}

.test-leave-from,
.test-enter-to {
  opacity: 1;
  transform: scale(1);
}

.test-enter-active,
.test-leave-active {
  transition: all 2s ease;
}
</style>