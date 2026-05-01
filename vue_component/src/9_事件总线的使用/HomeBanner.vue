<template>
  <div class="banner">
    <button @click="bannerBtnClick">banner按钮</button>
  </div>
</template>

<script>
import eventBus from './utils/event-bus';
export default {
  methods:{
    bannerBtnClick(){
      console.log('btnClick ')
      eventBus.emit("tomEvent","tom",18,1.88)
    }
  }
}
</script>

<style scoped></style>