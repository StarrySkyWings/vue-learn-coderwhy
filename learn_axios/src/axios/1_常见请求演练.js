import axios from "axios";
// 发送request请求
// axios
//   .request({
//     url: "https://fakestoreapi.com/products",
//     method: "get",
//   })
//   .then((res) => {
//     console.log("res:", res.data);
//   });

// 发送get请求
// axios.get("https://fakestoreapi.com/carts/1").then((res) => {
//   console.log('res:',res.data)
// });
// axios.get("https://fakestoreapi.com/carts",{
//   params:{
//     id:500665346
//   }
// }).then((res) => {
//   console.log('res:',res.data)
// });

// 发送post请求
// axios.post('http://123.207.32.32:1888/02_param/postjson',{
//   name:'coderwhy',
//   password:'123456'
// }).then(res => {
//   console.log('res:',res.data)
// })
axios
  .post("http://123.207.32.32:1888/02_param/postjson", {
    data: {
      name: "coderwhy",
      password: "123456",
    },
  })
  .then((res) => {
    console.log("res:", res.data);
  });
