<template>
  <div class="home">
    <button @click="changeName('harry')">修改name</button>
    <button @click="incrementLevel">递增level</button>
    <button @click="changeInfo({ name: 'jerry', level: 200 })">修改Info</button>
    <h2>Store Name:{{ $store.state.name }}</h2>
    <h2>Store Level:{{ $store.state.level }}</h2>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { CHANGE_INFO } from '@/store/mutation_type';
export default {
  computed: {
  },
  methods: {
    // ...mapMutations(['changeName', 'incrementLevel', CHANGE_INFO])
  }
}
</script>

<script setup>
import { mapMutations, useStore } from 'vuex';
import { CHANGE_INFO } from '@/store/mutation_type';

const store = useStore()

// 手动的映射和绑定
const mutations = mapMutations(['changeName', 'incrementLevel', CHANGE_INFO])
const newMutation = {}
Object.keys(mutations).forEach(key => {
  newMutation[key] = mutations[key].bind({ $store: store })
})
const { changeName, incrementLevel, changeInfo } = newMutation

</script>

<style scoped></style>