<template>
  <div>
    <h2>Category</h2>
  </div>
</template>

<script>
import eventBus from './utils/event-bus';
export default {
  methods:{
    tomEventHandler(){
      console.log('tomEvent在category中监听')
    }
  },
  created(){
    eventBus.on("tomEvent",this.tomEventHandler)
  },
  unmounted(){
    console.log('category unmounted')
    eventBus.off("tomEvent",this.tomEventHandler)
  }
}
</script>

<style scoped></style>