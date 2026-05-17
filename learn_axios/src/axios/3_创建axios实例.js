import axios from "axios";

// axios默认库提供给我们的实例对象
// axios.get('https://fakestoreapi.com/products')

// 创建其他的实例发送网络请求
const instance1 = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 6000,
  headers: {},
});

instance1
  .get("/products", {
    params: {
      id: 50066,
    },
  })
  .then((res) => {
    console.log("res:", res.data);
  });

const instance2 = axios.create({
  baseURL: "https://httpbin.org",
  timeout: 10000,
  headers: {},
});
