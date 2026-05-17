import axios from "axios";

// baseURL
const baseURL = "https://fakestoreapi.com";

// 给axios实例配置公共的基础配置
axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 10000;
axios.defaults.headers = {};

// 1.get:/product
// axios.get("/products").then((res) => {
//   console.log("res:", res.data);
// });

// 2.get:/cart
// axios.get("/carts").then((res) => {
//   console.log("res:", res.data);
// });

// axios发送多个请求
// Promise.all
axios.all([
  axios.get("/carts"), 
  axios.get("https://fakestoreapi.com/products")])
.then((res) => {
    console.log("res:", res);
});