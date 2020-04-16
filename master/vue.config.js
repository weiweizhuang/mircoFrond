
const port = 9770; // dev port

module.exports = {
  // publicPath: './',
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Cache-Control":"no-cache"
    },
    proxy: {
      //配置跨域
      '/api': {
          target: "http://hexo.zweiwei.cn/",
          ws:true,
          changeOrigin:true,
              '^/api':'/'
          }
    }
    
  }
};