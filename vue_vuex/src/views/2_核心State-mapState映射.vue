<template>
  <div class="home">
    <button @click="incrementLevel">修改level</button>
    <!-- 在模板中直接使用多个状态 -->
    <h2>name:{{ $store.state.name }}</h2>
    <h2>level:{{ $store.state.level }}</h2>
    <h2>avatar:{{ $store.state.avatarURL }}</h2>

    <!-- 计算属性（映射状态:数组写法） -->
    <!-- <h2>name:{{ name }}</h2>
    <h2>level:{{ level }}</h2>
    <h2>avatarURL:{{ avatarURL }}</h2> -->

    <!-- 计算属性（映射状态:对象写法） -->
    <!-- <h2>name:{{ sName }}</h2>
    <h2>level:{{ sLevel }}</h2>
    <h2>avatarURL:{{ sAvatarURL }}</h2> -->

    <!-- setup计算属性（映射状态:对象写法） -->
    <!-- <h2>name:{{ cName }}</h2>
    <h2>level:{{ cLevel }}</h2>
    <h2>avatarURL:{{ cAvatarURL }}</h2> -->

    <!-- setup计算属性（映射状态:对象写法） -->
    <h2>name:{{ name }}</h2>
    <h2>level:{{ level }}</h2>
    <h2>avatarURL:{{ avatarURL }}</h2>
  </div>
</template>

<!-- <script>
import { mapState } from 'vuex';
export default {
  computed: {
    // name(){
    //   return this.$store.state.name
    // },
    // level(){
    //   return this.$store.state.level
    // }
    ...mapState(['name', 'level', 'avatarURL']),
    ...mapState({
      sName: state => state.name,
      sLevel: state => state.level,
      sAvatarURL: state => state.avatarURL
    })
  }
}
</script> -->

<script setup>
import { computed, toRefs } from 'vue';
import { mapState, useStore } from 'vuex';
// import useState from '@/hooks/useState';

// 一步步完成
// const { name, level, avatarURL } = mapState(['name', 'level', 'avatarURL'])
// const store = useStore()
// const cName = computed(name.bind({ $store: store }))
// const cLevel = computed(level.bind({ $store: store }))
// const cAvatarURL = computed(avatarURL.bind({ $store: store }))

// 使用useState
// const { name, level, avatarURL } = useState(['name', 'level', 'avatarURL'])

// 直接对store.state进行解构（推荐）
const store = useStore()
const { name, level, avatarURL } = toRefs(store.state)
function incrementLevel(){
  store.state.level++
}
</script>

<style scoped></style>