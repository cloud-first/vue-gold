// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    proxyTable: {
      //线上


      "/login/api/mobile-category-service": {
        target: "http://myxb.5173.com:93/",
        changeOrigin: true,
        pathRewrite: {'^/login/api/mobile-category-service': '/api/mobile-category-service'}
      },
      "/login/api/mobile-sms-service": {
        target: "http://myxb.5173.com:93/",
        changeOrigin: true,
        pathRewrite: {'^/login/api': '/api'}
      },
      // "/api/mobile-user-service": {
      //   target: "http://myxb.5173.com:93/",
      //   changeOrigin: true,
      //   // pathRewrite: {'^/api/mobile-user-service': '/mobile-user-service'}
      // },

      "/api": {
        // target: "http://192.168.40.244:8086/",
        // target: "http://192.168.40.130:8086/",
        target: "http://myxb.5173.com:93/",
        changeOrigin: true,

      },
      // "/gamegold-facade-frontend": {
      //   // target: "http://192.168.40.244:8086/",
      //   // target: "http://192.168.40.130:8086/",
      //   target: "http://yxbmall.5173.com/",
      //   changeOrigin: true,
      //
      // },
      // "/api/mobile-goods-service": {
      //   // target: "http://192.168.40.244:8086/",
      //   // target: "http://192.168.40.244:8086/",
      //   // target: "http://192.168.40.130:8086/",
      //   target: "http://192.168.40.130:8086/",
      //   changeOrigin: true,
      //   pathRewrite: {'^/api/mobile-goods-service': '/mobile-goods-service'}
      // },
      /**
       * 登入开始
       */

      // "/login/api/mobile-category-service": {
      //   target: "http://mn.5173.cn/",
      //     changeOrigin: true,
      //     pathRewrite: {'^/login/api/mobile-category-service': '/api/mobile-category-service'}
      // },
      // "/login/api/mobile-sms-service": {
      //   target: "http://mn.5173.cn/",
      //     changeOrigin: true,
      //     pathRewrite: {'^/login/api': '/api'}
      // },
      // "/api/mobile-user-service": {
      //   target: "http://mn.5173.cn/",
      //     changeOrigin: true,
      //   // pathRewrite: {'^/api/mobile-user-service': '/mobile-user-service'}
      // },
      /**
       *  ---- 结束 ------
       */
      // http://192.168.40.130:8086/mobile-goods-service/rs
      // "/api/mobile-goods-service": {
      //   target: "http://192.168.40.130:8086/",
      //   changeOrigin: true,
      //   pathRewrite: {'^/api/mobile-goods-service': '/mobile-goods-service'}
      // }
      // "/api/mobile-goods-service": {
      //   target: "http://myxb.5173.com:93/",
      //   changeOrigin: true,
      //   pathRewrite: {'^/api/mobile-goods-service': '/mobile-goods-service'}
      // }

    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
