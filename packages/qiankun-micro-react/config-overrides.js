const { name } = require('./package.json');

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`; // 微应用的包名，这里与主应用中注册的微应用名称一致
    config.output.libraryTarget = 'umd'; // 把微应用打包成 umd 库格式
    config.output.jsonpFunction = `webpackJsonp_${name}`; // 按需加载
    config.output.publicPath = `//localhost:${process.env.PORT}/`;  // 解决微应用加载【静态资源】会404（微应用独立运行时不能配置）
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.historyApiFallback = true;
      config.open = false;
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      return config;
    };
  },
};
