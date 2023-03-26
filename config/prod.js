module.exports = {
    env: {
        NODE_ENV: '"production"'
    },
    defineConstants: {
        API_BASE_URL: '"https://dy.kfer.cn/api"',
        TOKEN: '"79ce547967af00faf8fc67ce77f0373c2023d1f7876a5f40c99c325c61c1b104d2053dcc98f336436d8cb276f7e06b9f857e52cb6067d61b302f20ae98f76661b0cfa1f3ca14dd7cf5210d6546dc064fe6aa746108c4d045aad403830ff0b14c69ecc1b067a84e7def04f81767d92d9cdfbfc298a27a7bdf0edd83f850ce0d86"',
    },
    mini: {},
    h5: {
        /**
         * WebpackChain 插件配置
         * @docs https://github.com/neutrinojs/webpack-chain
         */
        // webpackChain (chain) {
        //   /**
        //    * 如果 h5 端编译后体积过大，可以使用 webpack-bundle-analyzer 插件对打包体积进行分析。
        //    * @docs https://github.com/webpack-contrib/webpack-bundle-analyzer
        //    */
        //   chain.plugin('analyzer')
        //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])

        //   /**
        //    * 如果 h5 端首屏加载时间过长，可以使用 prerender-spa-plugin 插件预加载首页。
        //    * @docs https://github.com/chrisvfritz/prerender-spa-plugin
        //    */
        //   const path = require('path')
        //   const Prerender = require('prerender-spa-plugin')
        //   const staticDir = path.join(__dirname, '..', 'dist')
        //   chain
        //     .plugin('prerender')
        //     .use(new Prerender({
        //       staticDir,
        //       routes: [ '/pages/index/index' ],
        //       postProcess: (context) => ({ ...context, outputPath: path.join(staticDir, 'index.html') })
        //     }))
        // }
    }
}