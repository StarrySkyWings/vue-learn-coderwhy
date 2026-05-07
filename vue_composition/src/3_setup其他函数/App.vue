<template>
  <div>
    <h2>App:{{ info }}</h2>
    <ShowInfo :info="info" :roInfo="roInfo" @changeInfoName="changeInfoName" @change-ro-info-name="changeRoInfoName"/>
  </div>
</template>

<script>
import { reactive,readonly } from 'vue';
import ShowInfo from './ShowInfo.vue';

export default {
  components:{
    ShowInfo
  },
  setup() {

    // 本地定义多个数据，都需要传递给子组件
    // name/age/height

    const info = reactive({
      name: 'tom',
      age: 18,
      height: 1.88
    })

    const roInfo = readonly(info)

    function changeInfoName(payload){
      info.name = payload
    }
    function changeRoInfoName(payload){
      info.name = payload
    }

    return {
      info,
      changeInfoName,
      roInfo,
      changeRoInfoName
    }
  }
}
</script>

<style scoped></style>