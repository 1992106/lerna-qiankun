/* eslint-disable @typescript-eslint/ban-ts-comment,@typescript-eslint/explicit-module-boundary-types */
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "./router";
import store from "./store";

// @ts-ignore
import { registerAntd } from "./registerAntd";
import "./public-path";

// @ts-ignore
let app = null;
let router = null;

function render(props = {}) {
  // @ts-ignore
  const { container } = props;

  // 在 render 中创建 Router，可以保证在卸载微应用时，移除 location 事件监听，防止事件污染
  // @ts-ignore
  // 设置 history 模式路由的 base,和主应用的 activeRule 是一样
  const base = window.__POWERED_BY_QIANKUN__
    ? "/vue/micro-app/"
    : process.env.BASE_URL;
  router = createRouter({
    history: createWebHistory(base),
    routes,
  });

  app = createApp(App);
  // @ts-ignore
  app.config.productionTip = false;

  app
    .use(store)
    .use(router)
    .mount(container ? container.querySelector("#app") : "#app"); // 为了避免根 id #app 与其他的 DOM 冲突，需要限制查找范围

  registerAntd(app);
}

// 独立运行时，直接挂载应用
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("VueMicroApp bootstrap");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props = {}) {
  console.log("VueMicroApp mount", props);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log("VueMicroApp unmount");
  // @ts-ignore
  app.unmount();
  app = null;
  router = null;
}
