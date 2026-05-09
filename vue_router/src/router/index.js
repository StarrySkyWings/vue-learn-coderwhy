import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
// import About from "@/views/About.vue";
// import Home from "@/views/Home.vue";

// 路由的懒加载
// const Home = () => import(/* webpackChunkName:'home' */ "../views/Home.vue");
// const About = () => import(/*webpackChunkName:'about'*/ "../views/About.vue");

// 创建一个路由：映射关系
const router = createRouter({
  // 指定采用的模式:hash
  history: createWebHashHistory(),
  // history: createWebHistory(),
  // 映射关系
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      name: "home",
      path: "/home",
      component: () => import("../views/Home.vue"),
      meta: {
        name: "tom",
        age: 18,
      },
      children: [
        {
          path: "/home",
          redirect: "/home/recommed",
        },
        {
          path: "recommed", // /home/recommed
          component: () => import("../views/HomeRecommed.vue"),
        },
        {
          path: "ranking", // /home/ranking
          component: () => import("../views/HomeRanking.vue"),
        },
      ],
    },
    {
      path: "/about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/user/:id",
      component: () => import("../views/User.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("../views/NotFound.vue"),
    },
    {
      path: "/order",
      component: () => import("../views/Order.vue"),
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue"),
    },
  ],
});

// 动态管理路由
let isAdmin = true;
if (isAdmin) {
  // 一级路由
  router.addRoute({
    path: "/admin",
    component: () => import("../views/Admin.vue"),
  });

  // 添加vip页面
  router.addRoute("home", {
    path: "vip",
    component: () => import("../views/HomeVip.vue"),
  });
}

// 获取router中所有的映射路由对象
console.log(router.getRoutes());

// 路由导航守卫
// 进行任何的路由跳转之前，传入的beforeEach中的函数都会被回调
// 需求：进入到订单(order)页面时，判断用户是否登录(isLogin -> localStorage保存token)
// 情况一：用户没有登录，那么跳转到登录页面，进行登录的操作
// 情况二：用户已经登录，那么直接进入到订单页面
router.beforeEach((to, from) => {
  // console.log('beforeEach传入的函数被回调')
  // 进入到任何别的页面时，都跳转到login页面
  // if(to.path !== '/login'){
  //   return '/login'
  // }

  // 进入到订单页面时，判断用户是否登录
  const token = localStorage.getItem("token");
  if (to.path === "/order" && !token) {
    return "/login";
  }
});

export default router;
