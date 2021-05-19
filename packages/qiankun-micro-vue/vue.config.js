// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name } = require("./package");

module.exports = {
  devServer: {
    // 监听端口
    port: 8001,
    // 配置跨域请求头，解决开发环境的跨域问题
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`, // 微应用的包名，这里与主应用中注册的微应用名称一致
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`, // 按需加载
    },
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
