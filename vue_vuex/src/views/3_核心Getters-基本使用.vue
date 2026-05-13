<template>
  <div class="home">
    <!-- <button @click="incrementLevel">修改level</button> -->
    <h2>doubleCounter:{{ $store.getters.doubleCounter }}</h2>
    <h2>friendsTotalAge:{{ $store.getters.totalAge }}</h2>
    <h2>message:{{ $store.getters.message }}</h2>
    <h2>friend111:{{ $store.getters.getFriendById(111) }}</h2>
    <h2>friend112:{{ $store.getters.getFriendById(112) }}</h2>
  </div>
</template>

<script>
export default {

}
</script>

<script setup>
</script>

<style scoped></style>