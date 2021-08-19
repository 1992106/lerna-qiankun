import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { message } from "ant-design-vue";
import {
  registerMicroApps,
  start,
  // setDefaultMountApp,
  initGlobalState,
  addGlobalUncaughtErrorHandler,
} from "qiankun";

/**
 * name: 必选，微应用的名称，微应用之间必须确保唯一。
 * entry: 必选，微应用的入口。
 * container: 必选，微应用的容器节点的选择器或者 Element 实例。
 * activeRule:  必选，微应用的激活规则。
 */
const apps = [
  {
    name: "vue-micro",
    entry: "//localhost:8001/", // TODO: 对应[微应用]的url, 路径最后面的 / 不可省略
    container: "#micro-page", // TODO: 对应[主应用]<div id="micro-page"></div>
    activeRule: "/vue/micro-app", // TODO: 对应[微应用]路由base字段 "/vue/micro-app/"
  },
  {
    name: "react-micro",
    entry: "//localhost:8002/", // TODO: 对应[微应用]的url, 路径最后面的 / 不可省略
    container: "#micro-page", // TODO: 对应[主应用]<div id="micro-page"></div>
    activeRule: "/react/micro-app", // TODO: 对应[微应用]路由base字段 "/react/micro-app/"
  },
];

export default function microAppRegister() {
  // 全局的微应用生命周期钩子
  const mainLifeCycles = {
    beforeLoad: [
      (app) => {
        console.log("[LifeCycle] before load %c%s", "color: green;", app.name);
      },
    ],
    beforeMount: [
      (app) => {
        NProgress.start();
        console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
      },
    ],
    afterMount: [
      (app) => {
        NProgress.done();
        console.log("[LifeCycle] after mount %c%s", "color: red;", app.name);
      },
    ],
    afterUnmount: [
      (app) => {
        console.log(
          "[LifeCycle] after unmount %c%s",
          "color: green;",
          app.name
        );
      },
    ],
  };

  // 注册微应用的基础配置信息。当浏览器 url 发生变化时，会自动检查每一个微应用注册的 activeRule 规则，符合规则的应用将会被自动激活。
  registerMicroApps(apps, mainLifeCycles);

  // 启动 qiankun
  start({
    prefetch: true,
    singular: true,
  });

  // 设置主应用启动后默认进入的微应用
  // 如果在main.js启动时，需要调用setDefaultMountApp；如果在microPage.vue组件启动时，不需要调用
  // setDefaultMountApp(apps[0].activeRule);
}

/**
 * 定义全局状态，并返回通信方法，建议在主应用使用，微应用通过 props 获取通信方法
 */
const initState = {};
const actions = initGlobalState(initState);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev: 变更前的状态
  console.log(state, prev);
});
actions.setGlobalState(actions);
actions.offGlobalStateChange();

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event) => {
  console.error(event);
  const { message: msg } = event;
  // 加载失败时提示
  if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
    message.error("微应用加载失败，请检查应用是否可运行");
  }
});
