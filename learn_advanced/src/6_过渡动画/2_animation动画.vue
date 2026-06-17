<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>
    <transition name="test">
      <h2 v-if="isShow">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nihil minima. Excepturi perspiciatis
        officia ipsum? Dolores, nulla expedita. Ab tempore alias atque fuga nam distinctio temporibus. Sint sapiente ex
        modi!
      </h2>
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

.test-enter-active {
  animation: whyAnim 2s ease;
}

.test-leave-active{
  /* animation: whyLeaveAnim 2s ease; */
  animation: whyAnim 2s ease reverse;
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

@keyframes whyLeaveAnim{
  0%{
    transform: translateX(0);
    opacity: 1;
  }
  
  100%{
    transform: translateX(-500px);
    opacity: 0;
  }
}
</style>