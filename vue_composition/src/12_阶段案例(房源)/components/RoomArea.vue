<template>
  <div class="room-area">
    <!-- 区域header -->
    <AreaHeader :title="areaData.title" :subtitle="areaData.subtitle" />

    <!-- 房间列表 -->
    <div class="room-list">
      <template v-for="item in areaData.list" :key="item.id">
        <RoomItem :itemData="item"></RoomItem>
      </template>
    </div>
  </div>
</template>

<script setup>
import AreaHeader from './AreaHeader.vue';
import RoomItem from './RoomItem.vue';
defineProps({
  areaData: {
    type: Object,
    default: () => { }
  }
})
</script>

<style scoped lang="less">
.room-list {
  display: flex;
  flex-wrap: wrap;
  margin: 20px -8px;
}
</style>