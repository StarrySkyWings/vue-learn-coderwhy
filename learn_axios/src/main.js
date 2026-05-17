import { createApp } from "vue";
import App from "./App.vue";
import hyRequest from "./service";

createApp(App).mount("#app");

hyRequest
  .request({
    url: "/products",
  })
  .then((res) => {
    console.log("res:", res);
  });

hyRequest
  .get({
    url: "/products",
    params: {
      id: 500066,
    },
  })
  .then((res) => {
    console.log("res:", res);
  });
