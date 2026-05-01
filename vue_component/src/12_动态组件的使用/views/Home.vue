<template>
  <div class="home">
    <h2>Home组件 -- {{ name }} -- {{ age }}</h2>
    <button @click="homeBtnClick">homeClick</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    age: {
      type: Number,
      default: 0
    }
  },
  emits:['homeClick'],
  methods:{
    homeBtnClick(){
      this.$emit('homeClick','home')
    }
  }
}
</script>

<style scoped></style>