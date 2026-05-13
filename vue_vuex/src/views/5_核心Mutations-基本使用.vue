<template>
  <div class="home">
    <button @click="changName">修改name</button>
    <button @click="incrementLevel">递增level</button>
    <button @click="changInfo">修改Info</button>
    <h2>Store Name:{{ $store.state.name }}</h2>
    <h2>Store Level:{{ $store.state.level }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { CHANGE_INFO } from '@/store/mutation_type';
export default {
  computed: {
  },
  methods: {
    changName() {
      // this.$store.state.name = 'harry'
      this.$store.commit('changeName', 'harry')
    },
    incrementLevel() {
      this.$store.commit('incrementLevel')
    },
    changInfo() {
      this.$store.commit(CHANGE_INFO, { name: 'jerry', level: 99 })
    }
  }
}
</script>

<script setup>
// import { computed } from 'vue';
// import { useStore } from 'vuex';

// const store = useStore()
// const message = computed(() => store.getters.message)
// function changName(){
//   store.state.name = 'marry'
// }
</script>

<style scoped></style>