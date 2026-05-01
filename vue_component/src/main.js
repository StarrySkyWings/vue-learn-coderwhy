import { createApp } from "vue";

import App from "./16_组件的混入Mixin/App.vue";
// import函数可以让webpack对导入文件进行分包处理
// import("./utils/math").then(res => {
//   res.sum(20,30)
// })
const app = createApp(App)
app.mixin({
  created(){
    console.log('mixin created')
  }
})
app.mount("#app");
