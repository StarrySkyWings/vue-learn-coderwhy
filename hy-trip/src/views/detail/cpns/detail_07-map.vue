<template>
  <div class="map">
    <detailSection title="位置周边" more-text="查看更多周边信息">
      <div ref="mapRef" class="baidu"></div>
    </detailSection>
  </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';
import { onMounted, ref } from 'vue';

const props = defineProps({
  position: {
    type: Object,
    default: () => ({})
  }
})

const mapRef = ref()

onMounted(() => {
  const map = new BMap.Map(mapRef.value); // 创建地图实例
  const point = new BMap.Point(props.position.longitude, props.position.latitude); // 创建点坐标
  map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
  const marker = new BMap.Marker(point); // 创建标注    
  map.addOverlay(marker); // 将标注添加到地图中 
})

</script>

<style lang="less" scoped>
.baidu {
  height: 250px;
}
</style>