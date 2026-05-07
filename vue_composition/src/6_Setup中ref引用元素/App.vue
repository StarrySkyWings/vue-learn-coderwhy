<template>
  <div>
    <!-- 获取元素 -->
    <h2 ref="titleRef">我是标题</h2>
    <button ref="btnRef">按钮</button>


    <!-- 获取组件实例 -->
    <ShowInfo ref="showInfoRef"></ShowInfo>

    <button @click="getElement">获取元素</button>


  </div>
</template>

<script>
import ShowInfo from './ShowInfo.vue';
import { onMounted, ref } from 'vue';

export default {
  components:{
    ShowInfo
  },
  setup() {
    const titleRef = ref()
    const btnRef = ref()
    const showInfoRef = ref()

    // console.log(titleRef.value)
    // mounted的生命周期函数
    onMounted(() => {
      console.log(titleRef.value)
      console.log(btnRef.value)
      console.log(showInfoRef.value)
      showInfoRef.value.showInfoFoo()
    })

    function getElement() {
      console.log(titleRef.value)
      console.log(btnRef.value)
      console.log(showInfoRef.value)
    }

    return {
      titleRef,
      getElement,
      btnRef,
      showInfoRef
    }
  }
}
</script>

<style scoped></style>