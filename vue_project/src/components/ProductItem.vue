<template>
  <div class="product">
    <h2>商品名称</h2>
    <p>商品描述,9.9秒杀</p>
    <p>商品价格:{{ price }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 9.9
    }
  }
}
</script>