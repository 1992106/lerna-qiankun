const { name } = require('./package.json');

module.exports = {
  webpack: function override(config) {
    config.output.library = `${name}-[name]`; // 微应用的包名，这里与主应用中注册的微应用名称一致
    config.output.libraryTarget = 'umd'; // 把微应用打包成 umd 库格式
    config.output.jsonpFunction = `webpackJsonp_${name}`; // 按需加载
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.historyApiFallback = true;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      return config;
    };
  },
};
