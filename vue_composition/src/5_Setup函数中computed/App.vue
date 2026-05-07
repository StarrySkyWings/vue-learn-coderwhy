<template>
  <div>
    <h2>{{ names.firstName + ' ' + names.lastName }}</h2>
    <h2>{{ fullname }}</h2>
    <button @click="setFullName">设置fullname</button>
    <h2>{{ scoreLevel }}</h2>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
  setup() {
    // 定义数据
    const names = reactive({
      firstName: 'kobe',
      lastName: 'bryant'
    })
    // const fullname = computed(() => {
    //   return names.firstName + " " + names.lastName
    // })

    const fullname = computed({
      get() {
        return names.firstName + " " + names.lastName
      },
      set(newValue){
        const tempName = newValue.split(" ")
        names.firstName = tempName[0]
        names.lastName = tempName[1]
      }
    })

    function setFullName(){
      fullname.value = 'coder why'
    }

    // 定义score
    const score = ref(89)
    const scoreLevel = computed(() => {
      return score.value >= 60 ? '及格' : '不及格'
    })


    return {
      names,
      fullname,
      scoreLevel,
      setFullName
    }
  }
}
</script>

<style scoped></style>