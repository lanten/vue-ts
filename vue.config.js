const path = require('path')
const webpack = require('webpack')

module.exports = {
  lintOnSave: 'error',

  productionSourceMap: false, // 禁用生产环境 source-map

  devServer: {
    // proxy: 'http://localhost:4000',
  },

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $fn: path.resolve(__dirname, './src/utils/fn'),
      }),
    ],
  },
}
