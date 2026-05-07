<template>
  <div>ShowInfo:{{ name }} - {{ age }} - {{ height }}</div>
</template>

<script>
import { inject } from 'vue';

export default {
  // inject的option api注入
  // inject:['name','age'],
  setup() {
    const name = inject('name')
    const age = inject('age')
    const height = inject('height',1.88)

    return {
      name,
      age,
      height
    }
  }
}
</script>

<style scoped></style>