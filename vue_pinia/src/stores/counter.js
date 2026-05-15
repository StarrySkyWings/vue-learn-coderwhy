// 定义关于counter的store
import { defineStore } from "pinia";
import useUser from "./use";



const useCounter = defineStore("counter", {
  state: () => ({
    count: 99,
    friends:[
      {id:111,name:'jack'},
      {id:112,name:'marry'},
      {id:113,name:'james'}
    ]
  }),
  getters: {
    // 基本使用
    doubleCount(state) {
      return state.count * 2;
    },
    // 一个getter引入另外一个getter
    doubleCountAddOne() {
      // this是store实例
      return this.doubleCount + 1
    },
    // getters也支持返回一个函数
    getFriendById(state){
      return function(id){
        for (let i = 0; i < state.friends.length; i++) {
          const friend = state.friends[i]
          if(friend.id === id){
            return friend
          }
        }
      }
    },
    // getters中用到别的store中的数据
    showMessage(state){
      // 获取user信息
      const userStore = useUser()

      // 获取自己的信息


      // 拼接信息
      return `name:${userStore.name}-count:${state.count}`
    }
  },
  actions:{
    increment(){
      this.count++
    },
    incrementNum(num){
      this.count += num
    }
  }
});

export default useCounter;
