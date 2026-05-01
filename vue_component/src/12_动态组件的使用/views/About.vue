<template>
  <div class="about">
    <h2>About组件 -- {{ sing }}</h2>
  </div>
</template>

<script>
  export default{
    props:{
      sing:{
        type:String,
        default:''
      }
    }
  }
</script>

<style scoped>
</style>