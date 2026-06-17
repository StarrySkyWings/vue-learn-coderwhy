<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>
    <!-- mode属性 -->
    <transition name="test" mode="out-in">
      <h2 v-if="isShow">
        哈哈哈
      </h2>
      <h2 v-else>呵呵呵</h2>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(true)

</script>

<style scoped>
h2 {
  display: inline-block;
}

.test-enter-from,
.test-leave-to {
  opacity: 0;
}

.test-enter-to,
.test-leave-from {
  opacity: 1;
}

.test-enter-active {
  animation: whyAnim 2s ease;
  transition: opacity 2s ease;
}

.test-leave-active {
  /* animation: whyLeaveAnim 2s ease; */
  animation: whyAnim 2s ease reverse;
  transition: opacity 2s ease;
}

@keyframes whyAnim {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes whyLeaveAnim {
  0% {
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    transform: translateX(-500px);
    opacity: 0;
  }
}
</style>