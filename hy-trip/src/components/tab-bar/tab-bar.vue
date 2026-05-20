<template>
  <div class="tab-bar">
    <van-tabbar active-color="#ff9854" v-model="currentIndex">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar.js';
import { getAssetURL } from '@/utils/load_assets';
import { ref } from 'vue';
const currentIndex = ref(0)
</script>

<style lang="less" scoped>
.tab-bar {
  // 局部定义一个变量：只针对.tab-bar子元素才生效
  // --van-tabbar-item-font-size: 30px !important;


  // 找到类，对类中的CSS属性重写
  // :deep(.class) 找到子组件的类，让子组件的类也可以生效
  // :deep(.van-tabbar-item__icon){
  //   font-size: 30px;
  // }

  img {
    height: 26px;
  }
}
</style>