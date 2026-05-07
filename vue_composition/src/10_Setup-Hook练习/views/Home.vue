<template>
  <div>
    <h2>Home计数:{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>


    <button @click="popularClick">首页-流行</button>
    <button @click="hotClick">首页-热门</button>
    <button @click="songClick">首页-歌单</button>

    <div class="scroll">
      <h2>x:{{ scrollPosition.x }}</h2>
      <h2>y:{{ scrollPosition.y }}</h2>
    </div>
    


    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
  </div>
</template>

<script>
// import { onMounted, ref } from 'vue';
import useCounter from '../hooks/useCounter';
import useTitle from '../hooks/useTitle';
import useScrollPosition from '../hooks/useScrollPosition';
export default {
  setup() {

    // counter逻辑
    const { counter, increment, decrement } = useCounter()

    // 修改标题
    const title = useTitle('首页')

    // 监听按钮的点击
    function popularClick() {
      title.value = '首页-流行'
    }

    function hotClick() {
      title.value = '首页-热门'
    }

    function songClick() {
      title.value = '首页-歌单'
    }

    // 获取滚动的位置
    const { scrollPosition } = useScrollPosition()
    console.log(scrollPosition)

    return {
      counter,
      increment,
      decrement,
      popularClick,
      hotClick,
      songClick,
      scrollPosition
      // scrollX,
      // scrollY
    }
  }
}
</script>

<style scoped></style>