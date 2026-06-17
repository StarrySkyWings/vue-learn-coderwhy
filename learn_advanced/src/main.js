import { createApp } from "vue";
// import App from "./1_自定义指令/App.vue";
// import App from "./2_内置组件补充/App.vue";
// import App from "./3_安装插件/App.vue";
// import App from "./4_Render函数/App.vue";
// import App from "./5_JSX的语法/App.vue";
import App from "./6_过渡动画/App.vue";
import useDirectives from "./1_自定义指令/directives/index.js";


// directiveFocus(app)
// app.directive("focus", {
//   // 生命周期的函数（自定义指令）
//   mounted(el) {
//     // console.log('v-focus应用的元素被挂载了',el)
//     el?.focus();
//   },
// });

// 自定义指令的方式一：
// const app = createApp(App);
// useDirectives(app)
// app.mount("#app");
// import router from "./router/index.js";

// 自定义指令的方式二：
createApp(App).use(useDirectives).mount("#app");
