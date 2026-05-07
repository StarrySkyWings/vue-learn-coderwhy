<template>
  <div>
    <form>
      <input type="text" v-model="account.username">
      <input type="password" v-model="account.password">
    </form>
    <form>
      <input type="text" v-model="username">
      <input type="password" v-model="password">
    </form>

    <hr>
    <ShowInfo :name="name" :age="age"></ShowInfo>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';
import ShowInfo from './ShowInfo.vue';

export default {
  name:'App2',
  components:{
    ShowInfo
  },
  setup(){

    // 定义响应式数据：reactive/ref
    // 强调：ref也可以定义复杂的数据
    const info = ref({})
    console.log(info.value)

    // reactive的应用场景
    // 条件一：reacive应用于本地的数据
    // 条件二：多个数据之间是有关系/联系（聚合的数据，组织在一起会有特定的作用）
    const account = reactive({
      username:'zhangsan',
      password:'123456'
    })

    // ref的应用场景：其他的场景基本都用ref(computed)
    // 定义本地的一些简单数据
    const username = ref('zhangsan')
    const password = ref('123456')

    // 定义从网络中获取的数据也是使用ref
    // const musics = reactive([])
    const musics = ref([])

    onMounted(() => {
      const serverMusics = ['海阔天空','小苹果','野狼']
      musics.value = serverMusics
    })

    const name = ref('tom')
    const age = ref(18)

    return {
      account,
      username,
      password,
      name,
      age
    }
  }
}
</script>

<style scoped></style>