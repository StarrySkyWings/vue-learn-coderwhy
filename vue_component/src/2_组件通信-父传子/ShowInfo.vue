<template>
  <div class="infos">
    <h2 :class="$attrs.class">姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>身高：{{ height }}</h2>
    <h2>Message:{{ showMessage }}</h2>
  </div>

  <div class="other" v-bind="$attrs"></div>
</template>

<script>
export default {
  // 作用：接收父组件传递过来的属性
  // 1.props数组语法
  // 弊端：不能对类型进行验证，没有默认值
  // props:['name','age','height']

  // 2.props对象语法
  // inheritAttrs: false,
  props: {
    
    name: {
      type: String,
      default: '我是默认name'
    },
    age: {
      type: Number,
      required: true,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    friend: {
      type: Object,
      default: () => ({ name: 'james' })
    },
    hobbies: {
      type: Array,
      default: () => ['篮球', 'rap', '唱跳']
    },
    showMessage: {
      type: String,
      default: '我是showMessage'
    }
  }
}
</script>

<style scoped></style>