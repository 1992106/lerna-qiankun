import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layouts/index.vue";
import MicroPage from "@/layouts/microPage";
import HelloWorld from "@/views/HelloWorld";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      // 主应用本身的路由
      {
        path: "",
        name: "Layout",
        component: HelloWorld,
      },
      // https://qiankun.umijs.org/zh/faq#%E5%A6%82%E4%BD%95%E5%9C%A8%E4%B8%BB%E5%BA%94%E7%94%A8%E7%9A%84%E6%9F%90%E4%B8%AA%E8%B7%AF%E7%94%B1%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E5%BE%AE%E5%BA%94%E7%94%A8
      // vue + vue-router 技术栈的主应用
      // 1、主应用注册这个路由时给 path 加一个 *
      // 2、微应用的 activeRule 需要包含主应用的这个路由 path, 比如 “/vue/micro-app”
      {
        path: "vue/*",
        name: "vueMicroApp",
        component: MicroPage,
      },
      {
        path: "react/*",
        name: "reactMicroApp",
        component: MicroPage,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
