<template>
  <div class="detail top-page" ref="detailRef">
    <TabControl v-if="showTabControl" class="tabs" :titles="names" @tab-item-click="tabClick" />
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detailSwipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <DetailInfos name="描述" :ref="getSectionRef" :top-infos="mainPart.topModule" />
      <detailFacility name="设施" :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility" />
      <detailLandlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule"></detailLandlord>
      <detailComment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule" />
      <detailNotice name="须知" :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules" />
      <detailMap name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule" />
      <detailIntro :price-intro="mainPart.introductionModule" />
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getDetailInfos } from '@/services';
import { computed, ref } from 'vue';

import TabControl from '@/components/tab-control/tab-control.vue';
import detailSwipe from './cpns/detail_01-swipe.vue';
import DetailInfos from './cpns/detail_02-infos.vue';
import detailFacility from './cpns/detail_03-facility.vue';
import detailLandlord from './cpns/detail_04-landord.vue';
import detailComment from './cpns/detail_05-comment.vue';
import detailNotice from './cpns/detail_06-notice.vue';
import detailMap from './cpns/detail_07-map.vue';
import detailIntro from './cpns/detail_08-intro.vue';
import useScroll from '@/hooks/useScroll.js';

const router = useRouter()
const route = useRoute()
// console.log(route.params.id)
const houseId = route.params.id

// 发送网络请求获取数据
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
})

// 监听返回按钮的点击
const onClickLeft = () => {
  router.back()
}

// tabControl相关的操作
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
  return scrollTop.value >= 300
})

// const landlordRef = ref()
// const sectionEls = []
// const getSectionRef = (value) => {
//   sectionEls.push(value.$el)
// }
const sectionEls = ref({})
const names = computed(() => {
  return Object.keys(sectionEls.value)
})
const getSectionRef = (value) => {
  const name = value.$el.getAttribute('name')
  sectionEls.value[name] = value.$el
}
const tabClick = (index) => {
  const key = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[key]
  let instance = el.offsetTop
  if(index !== 0){
    instance = instance - 44
  }
  detailRef.value.scrollTo({
    top: instance,
    behavior: "smooth",
  })
}
// const tabClick = (index) => {
//   let instance = sectionEls[index].offsetTop
//   if(index !== 0){
//     instance = instance - 44
//   }
//   detailRef.value.scrollTo({
//     top: instance,
//     behavior: "smooth",
//   })
// }

</script>

<style lang="less" scoped>
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>