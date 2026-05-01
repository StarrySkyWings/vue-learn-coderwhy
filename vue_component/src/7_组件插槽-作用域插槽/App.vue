<template>
  <div class="app">
    <!-- tab-control -->
    <TabControl :titles="['衣服', '鞋子', '裤子']" @tab-item-click="tabItemClick" />
    <!-- <TabControl :titles="['流行','最新','优选']" /> -->
    <!-- 展示内容 -->
    <h1>{{ pageContents[currentIndex] }}</h1>


    <TabControl :titles="['衣服', '鞋子', '裤子']" @tab-item-click="tabItemClick">
      <template v-slot:default="props">
        <button>{{ props.item }}</button>
      </template>
    </TabControl>

    <TabControl :titles="['衣服', '鞋子', '裤子']" @tab-item-click="tabItemClick">
      <template #default="props">
        <a href="#">{{ props.item }}</a>
      </template>
    </TabControl>
  </div>
</template>

<script>
import TabControl from './TabControl.vue';
export default {
  name: 'App',
  components: {
    TabControl
  },
  data() {
    return {
      pageContents: ['衣服页面','鞋子页面','裤子页面'],
      currentIndex: 0
    }
  },
  methods: {
    tabItemClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped></style>