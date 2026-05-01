<template>
  <h2>Home组件</h2>
</template>

<script>
import messageMixin from '../mixins/message-mixin';
export default {
  mixins:[messageMixin],
  data(){
    return {
      homeBanners:['a','b','c']
    }
  },
  created(){
    console.log('home message')
  }
}
</script>

<style scoped></style>