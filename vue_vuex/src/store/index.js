import { createStore } from "vuex";
import { CHANGE_INFO } from "./mutation_type";
import homeModule from "./modules/home";
import counterModule from "./modules/counter";

const store = createStore({
  // state() {
  //   return {
  //     counter: 0,
  //   };
  // },
  state: () => ({
    // 模拟数据
    // counter: 100,
    rootCounter: 100,
    name: "tom",
    level: 100,
    avatarURL: "http://xxxxxx",
    friend: [
      { id: 111, name: "tom", age: 20 },
      { id: 112, name: "jack", age: 30 },
      { id: 113, name: "alex", age: 40 },
    ],
  }),
  getters: {
    // 基本使用
    doubleCounter(state) {
      return state.counter * 2;
    },
    totalAge(state) {
      return state.friend.reduce((preValue, item) => {
        return preValue + item.age;
      }, 0);
    },
    // 在该getters属性中，获取其他的getters
    message(state, getters) {
      return `name:${state.name},level:${state.level},friendTotalAge:${getters.totalAge}`;
    },
    // getters是可以返回一个函数的，调用这个函数可以传入参数（了解）
    getFriendById(state) {
      return function (id) {
        const friend = state.friend.find((item) => item.id === id);
        return friend;
      };
    },
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    changeName(state, payload) {
      state.name = payload;
    },
    incrementLevel(state) {
      state.level++;
    },
    [CHANGE_INFO](state, payload) {
      state.name = payload.name;
      state.level = payload.level;

      // 重要的原则：不要在mutation方法中执行异步操作
      // fetch("xxxx").then((res) => {
      //   res.json().then((res) => {
      //     state.name = res.name;
      //   });
      // });
    },
  },
  actions: {
    incrementAction(context) {
      // console.log(context.commit); //用于提交mutation
      // console.log(context.getters); //getters
      // console.log(context.state); // state
      context.commit("increment");
    },
    changeNameAction(context, payload) {
      context.commit("changeName", payload);
    },
    // fetchHomeMultidataAction(context) {
    //   return new Promise(async (resolve,reject) => {
    //     // await/async
    //     const res = await fetch("http://123.207.32.32:8000/home/multidata");
    //     const data = await res.json();

    //     // 修改state数据
    //     context.commit("changeBanners", data.data.banner.list);
    //     context.commit("changeRecommends", data.data.recommend.list);
    //     resolve('aaaa')
    //   });
    // },
  },
  modules: {
    home: homeModule,
    counter: counterModule,
  },
});

export default store;
