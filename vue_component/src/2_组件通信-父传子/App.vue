<template>
  <!-- 展示个人信息 -->
  <ShowInfo name="tom" :age="18" :height="1.88" class="active" address="广州" abc="cba" />
  <ShowInfo name="jack" :age="30" :height="1.87"/>
  <ShowInfo :age="22" showMessage="哈哈哈"/>
</template>

<script>
import ShowInfo from './ShowInfo.vue';
export default {
  name:'App',
  components:{
    ShowInfo
  }
}
</script>

<style scoped></style>