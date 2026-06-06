<template>
  <div class="search">
    <div class="search-nav-bar">
      <van-nav-bar left-arrow @click-left="onClickLeft">
        <template #right>
          <i class="icon-right-menu"></i>
        </template>
        <template #title>
          <searchBar :title="currentCity" :cancel-icon="showCancelIcon" :keyword="keyWord" />
        </template>
      </van-nav-bar>

      <!-- 位置 - 欢迎度排序 - 筛选 -->
      <dropdownSelect :items-data="searchConditions" />

      <!-- 优惠 - 多人入驻 -->
      <div class="tab-wrapper">
        <tab-select :items-data="searchHouse.hotFilters"></tab-select>
      </div>
    </div>

    <div class="list">
      <template v-for="(item, index) in searchHouse.items" :key="index">
        <search-list-item :item-data="item"></search-list-item>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import searchBar from '@/components/search-bar/search-bar.vue';
import dropdownSelect from '@/components/dropdown-select/dropdown-select.vue';
import tabSelect from '@/components/tab-select/tab-select.vue';
import useSearchStore from '@/stores/modules/search';
import { storeToRefs } from 'pinia';

// 网络请求
const searchStore = useSearchStore()
searchStore.fetchSearchConditions()
searchStore.fetchSearchHouse()
// searchStore.fetchGuessulike()
const { searchConditions, searchHouse, guessulike } = storeToRefs(searchStore)

const route = useRoute()
// const routeQuery = ref(route.query);
const { currentCity } = route.query
// console.log(route.query)
const PLACEHOLDER = `搜索${currentCity}的景点、地标、房源`
const keyWord = ref(PLACEHOLDER)
const showCancelIcon = ref(false);

const router = useRouter()
const onClickLeft = () => {
  router.back()
}


</script>

<style lang="less" scoped>
:deep(.van-sticky--fixed .guide-login) {
  margin-left: 0;
  margin-right: 0;
}

.search {
  overflow: hidden;
  width: 100%;
  height: 100%;

  .search-nav-bar {
    position: fixed;
    width: 100%;
    z-index: 100;
  }

  .search-conditions {
    padding-top: 46px;
  }

  .tab-wrapper {
    padding: 12px 0 10px 20px;
    background-color: #f7f8fb;
  }

  .list {
    padding: 141px 20px 0 20px;
    z-index: -1;
    position: relative;
  }
}
</style>