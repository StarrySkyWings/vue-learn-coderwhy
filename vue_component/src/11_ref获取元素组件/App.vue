<template>
  <div class="app">
    <h2 ref="title" :style="{ color: titleColor }">{{ message }}</h2>
    <button ref="btn" @click="changeTitle">修改title</button>

    <Banner ref="banner"/>
  </div>
</template>

<script>
import Banner from './Banner.vue';
export default {
  components:{
    Banner
  },
  data() {
    return {
      message: "Hello world",
      titleColor: 'red'
    }
  },
  methods: {
    changeTitle() {
      // 不要主动的去获取DOM，并且修改DOM内容
      // this.message = '你好啊，李银河！'
      // this.titleColor = 'blue'

      // 获取h2/button元素
      console.log(this.$refs.title)
      console.log(this.$refs.btn)

      // 获取Banner组件：组件实例
      console.log(this.$refs.banner)
      // 在父组件中可以主动调用子组件的对象方法
      this.$refs.banner.bannerClick()

      // 获取banner组件实例，获取banner中的元素
      console.log(this.$refs.banner.$el)

      // 如果banner中template是多个根，拿到的是第一个node节点
      // 注意：开发中不推荐一个组件的template中有多个根元素
      console.log(this.$refs.banner.$el.nextElementSibling)

      // 组件实例还有两个属性（了解）
      console.log(this.$parent)//获取父组件
      console.log(this.$root)//获取根组件
    }
  }
}
</script>

<style scoped></style>