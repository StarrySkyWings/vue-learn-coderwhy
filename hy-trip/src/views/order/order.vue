<template>
  <div class="order">
    <van-sticky>
      <van-nav-bar title="订单列表" left-text="旅途" left-arrow @click-left="onClickLeft">
        <template #right>
          <i class="icon-right-menu"></i>
        </template>
      </van-nav-bar>

      <van-tabs v-model:active="currentOrder" title-active-color="#ff9854" :line-height="2">
        <template v-for="(item, index) in orderTitles" :key="item">
          <van-tab :title="item" :name="index"></van-tab>
        </template>
      </van-tabs>
    </van-sticky>

    <div class="content" ref="orderRef">
      <div v-if="orderlist.length">
        <template v-for="(item, index) in orderlist" :key="index">
          <order-item :item-data="item"></order-item>
        </template>
      </div>
      <div v-else="!orderlist.length" class="tips">
        <img src="@/assets/img/order/icon-order.png" alt="" />
        <div class="title">近期暂无订单</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useOrderStore from '@/stores/modules/order';
import orderItem from './cpns/order-item.vue';
import { storeToRefs } from 'pinia';
import { onActivated, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import useScroll from '@/hooks/useScroll.js';

defineOptions({
  name: 'order'
})

const currentOrder = ref();
const orderTitles = ["全部订单", "近期订单", "待支付"];
const orderTitleType = ["all", "recent", "pend"];

const orderStore = useOrderStore()
orderStore.fetchOrderList()
const { orderlist } = storeToRefs(orderStore)

watch(currentOrder, (newValue) => {
  if (newValue !== undefined) {
    // console.log(orderTitleType[newValue]);
    orderStore.fetchOrderList(orderTitleType[newValue])
  }
});

const router = useRouter()
const onClickLeft = () => {
  router.back()
}

const orderRef = ref()
const { scrollTop } = useScroll(orderRef)
onActivated(() => {
  orderRef.value?.scrollTo({
    top: scrollTop.value
  })
})
</script>

<style lang="less" scoped>
.order {
  height: 100vh;
  --van-tabs-line-height: 40px;
  padding-bottom: 55px;

  .content {
    height: calc(100% - 86px);
    overflow: scroll;

    .tips {
      text-align: center;
      margin-top: 80px;

      img {
        width: 88%;
      }

      .title {
        margin-top: 20px;
        color: #000;
        font-size: 18px;
      }
    }
  }
}
</style>