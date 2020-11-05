var path = require('path')
function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'src/common/css/index.styl')
      ]
    })
}
module.exports = {
  publicPath: '',
  assetsDir: 'static',
  lintOnSave: false,
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },
  configureWebpack: {
    // 关闭 webpack 的性能提示
    performance: {
      maxEntrypointSize: 1000000,
      maxAssetSize: 200000,
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js');
      }
    },
  },
  productionSourceMap: false,
  devServer: {
    overlay: {
      warning: false,
      errors: false
    },
    port: 1010,
    proxy: {
      '/openapi': {
        target: 'https://www.baidu.com/openapi/',
        secure: true, // false为http访问，true为https访问
        changeOrigin: true, // 跨域访问设置，true代表跨域
        ws: true,
        pathRewrite: { // 路径改写规则
          '^/openapi': '' // 以/proxy/为开头的改写为''
        }
      }
    }
  }
}