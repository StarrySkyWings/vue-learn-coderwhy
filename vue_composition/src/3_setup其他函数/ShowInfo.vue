<template>
  <div>
    <h2>ShowInfo:{{ info }}</h2>
    <!-- 代码没有错误，但是违背规范（单向数据流） -->
    <button @click="info.name = 'zhangsan'">ShowInfo按钮</button>
    <!-- 正确的做法 -->
    <button @click="showInfo">ShoInof按钮</button>

    <hr>
    <!-- 使用readonly的数据 -->
     <h2>ShowInfo:{{ roInfo }}</h2>
     <button @click="changeRoInfoName">ShowInfo按钮</button>
  </div>
</template>

<script>
export default {
  props: {
    // reactive数据
    info: {
      type: Object,
      defalut: () => { }
    },
    // readonly数据
    roInfo:{
      type:Object,
      defalut:() => {}
    }
  },
  emits:["changeInfo",'changeRoInfoName'],
  setup(props,context){

    function showInfo(){
      context.emit('changeInfoName','jack')
    }

    function changeRoInfoName(){
      context.emit('changeRoInfoName','jerry')
    }
    return {
      showInfo,
      changeRoInfoName
    }
  }
}
</script>

<style scoped></style>