<template>
  <div>Counter:{{ counter }}</div>
  <button @click="changeCounter">修改Counter</button>

  <hr>
  <h2>name:{{ name }}</h2>
  <button @click="changeName">修改name的值</button>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    }
  },
  emits: ['update:counter','update:name'],
  methods: {
    changeCounter() {
      this.$emit('update:counter', 1000)
    },
    changeName(){
      this.$emit('update:name','jack')
    }
  }
}
</script>

<style scoped></style>