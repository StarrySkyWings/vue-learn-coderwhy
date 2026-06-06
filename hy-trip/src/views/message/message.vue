<template>
  <div class="message">
    <van-nav-bar title="消息中心" left-text="旅途" left-arrow @click-left="onClickLeft">
      <template #right>
        <i class="icon-right-menu"></i>
      </template>
    </van-nav-bar>
    <div class="content">
      <img src="@/assets/img/message/icon_message.png" alt="">
      <div class="text">暂无聊天消息</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()
const onClickLeft = () => {
  router.back()
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  img {
    width: 88%;
  }
}
</style>