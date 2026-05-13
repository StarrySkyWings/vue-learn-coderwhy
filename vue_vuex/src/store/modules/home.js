export default {
  state: () => ({
    // 服务器数据
    banners: [],
    recommends: [],
  }),
  mutations: {
    changeBanners(state, banners) {
      state.banners = banners;
    },
    changeRecommends(state, recommends) {
      state.recommends = recommends;
    },
  },
  actions: {
    async fetchHomeMultidataAction(context) {
      // 返回Promise,给Promise设置then
      // fetch('http://123.207.32.32:8000/home/multidata').then(res => {
      //   res.json().then(data => {
      //     console.log(data)
      //   })
      // })

      // Promise链式调用
      // fetch("http://123.207.32.32:8000/home/multidata").then((res) => {
      //   return res.json();
      // }).then((data) => {
      //   console.log(data);
      // });

      // await/async
      const res = await fetch("http://123.207.32.32:8000/home/multidata");
      const data = await res.json();

      // 修改state数据
      context.commit("changeBanners", data.data.banner.list);
      context.commit("changeRecommends", data.data.recommend.list);
    },
  },
};
