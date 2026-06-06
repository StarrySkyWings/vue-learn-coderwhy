<template>
  <div class="home" ref="homeRef">
    <homeNavBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSearchBox />
    <homeCategories />

    <div class="search" v-if="isShowSearchBar">
      <searchBar height="45px" key-word-font-size="14px" :search-icon="true" key-word="关键字/位置/民宿"
        @search-click="handleSearchClick" />
    </div>

    <homeContent />
    <!-- <button @click="moreBtnClick">加载更多</button> -->
  </div>
</template>


<script setup>
import { computed, onActivated, ref, watch } from 'vue';
import useHomeStore from '@/stores/modules/home';
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import homeCategories from './cpns/home-categories.vue';
import homeContent from './cpns/home-content.vue';
import searchBar from '@/components/search-bar/search-bar.vue';
import useScroll from '@/hooks/useScroll.js';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city.js';
import { storeToRefs } from 'pinia';

defineOptions({
  name: 'home'
})

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
// let currentPage = 1
// homeStore.fetchHouselistData(currentPage)
homeStore.fetchHouselistData()
// 1.热门建议
// const hotSuggests = ref([])
// hyRequest.get({
//   url:'/home/hotSuggests'
// }).then(res => {
//   hotSuggests.value = res.data
// })

// 模拟加载更多
// const moreBtnClick = () => {
//   console.log('加载更多的数据')
//   // currentPage++
//   // homeStore.fetchHouselistData(currentPage)
//   homeStore.fetchHouselistData()
// }

// 监听window窗口的滚动
// 1.当我们离开页面时,我们需要移除监听
// 2.如果别的页面也进行类似的监听，会编写重复代码
// const scrollListenerHandler = () => {
//   const clientHeight = document.documentElement.clientHeight
//   const scrollTop = document.documentElement.scrollTop
//   const scrollHeight = document.documentElement.scrollHeight
//   if (clientHeight + scrollTop >= scrollHeight) {
//     homeStore.fetchHouselistData()
//   }
//   // console.log(clientHeight,scrollTop,scrollHeight)
// }
// onMounted(() => {
//   window.addEventListener('scroll', scrollListenerHandler)
// })

// onUnmounted(() => {
//   window.removeEventListener('scroll', scrollListenerHandler)
// })

// useScroll(() => {
//   return homeStore.fetchHouselistData()
// })
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)
const router = useRouter()
const handleSearchClick = () => {
  router.push({
    path: '/search',
    query: {
      currentCity: currentCity.value.cityName
    }
  })
}

// 监听滚动到底部
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false
    })
  }
})

// 搜索框显示的控制
// const isShowSearchBar = ref(false)
// watch(scrollTop,(newTop) => {
//   isShowSearchBar.value = newTop > 100
// })
// 定义的可响应式数据，依赖另外一个可响应式的数据，那么可以使用计算函数(computed)
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})

// 跳转回home时,保留原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})

</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
}

.banner {
  img {
    width: 100%;
  }
}

.search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  // height: 45px;
  padding: 16px 16px 10px 16px;
  background-color: white;
  z-index: 9;
}
</style>