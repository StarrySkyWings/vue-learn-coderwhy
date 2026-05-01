<template>
  <AppHeader></AppHeader>
  <hr>
  <h2 class="title">{{ title }}</h2>
  <hr>
  <ProductItem></ProductItem>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import ProductItem from './components/ProductItem.vue';
export default {
  name:'App',
  data() {
    return {
      title: '我是标题'
    }
  },
  components: {
    ProductItem,
    AppHeader
  }
}
</script>

<style scoped>
.title{
  color:red;
}
</style>