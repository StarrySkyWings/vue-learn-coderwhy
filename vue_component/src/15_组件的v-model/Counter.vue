<template>
  <div>Counter:{{ modelValue }}</div>
  <button @click="changeCounter">修改Counter</button>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  }, 
  emits: ['update:modelValue'],
  methods: {
    changeCounter() {
      this.$emit('update:modelValue', 1000)
    }
  }
}
</script>

<style scoped></style>