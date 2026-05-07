<template>
  <div>
    <h2>ShowInfo</h2>
  </div>
</template>

<script>
  export default{
    setup(){

      function showInfoFoo(){
        console.log('showInfo foo function')
      }

      return {
        showInfoFoo
      }
    }
  }
</script>

<style scoped>
</style>