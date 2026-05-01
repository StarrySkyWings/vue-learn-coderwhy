<template>
  <div class="app">
    <!-- 内容是button -->
    <ShowMessage title="哈哈哈">
      <button>我是按钮元素</button>
    </ShowMessage>

    <!-- 内容是超链接 -->
    <ShowMessage title="哈哈哈">
      <a href="#">百度一下</a>
    </ShowMessage>

    <!-- 内容是图片 -->
    <ShowMessage title="哈哈哈">
      <img src="@/img/OIP-C.webp" alt="">
    </ShowMessage>

    <!-- 内容没有传递 -->
    <ShowMessage></ShowMessage>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue';
export default {
  components:{
    ShowMessage
  }
}
</script>

<style scoped></style>