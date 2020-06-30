/**
 * @file 此文件用于验证各种source-map的打包效果
 */

const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let allModes = [
  'eval',
  'cheap-eval-source-map',
  'cheap-module-eval-source-map',
  'eval-source-map',
  'cheap-source-map',
  'cheap-module-source-map',
  'inline-cheap-source-map',
  'inline-cheap-module-source-map',
  'source-map',
  'inline-source-map',
  'hidden-source-map',
  'nosources-source-map'
];

let getConfig = (item) => {
  return {
    mode: 'development',
    entry: __dirname + '/src/main.js',
    module: {
      rules: [
        {
          test: /.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /.png$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024, // 10 KB
              name: '[name].[hash:4].[ext]', // 设置处理后的文件名称格式
              publicPath: '../'
            }
          }
        }
      ]
    },
    devServer: {
      contentBase: './dist',
      hot: true, // 启动热更新
      open: true
    },
    plugins: [
      new CleanWebpackPlugin(),
      // 用于生成 index.html
      new HtmlWebpackPlugin({
        title: 'Ideal Webpack Develop Env',
        meta: {
          viewport: 'width=device-width'
        },
        filename: `html/${item}.html`,
        template: __dirname + '/src/index.html'
      }),

      /**
       * 启动热更新
       */
      new webpack.HotModuleReplacementPlugin({
        multiStep: true, //设置为 true 时，插件会分成两步构建文件。首先编译热加载 chunks，之后再编译剩余的通常的资源。
        fullBuildTimeout: 100,//当 multiStep 启用时，表示两步构建之间的延时。
        requestTimeout: 100, //下载 manifest 的延时（webpack 3.0.0 后的版本支持）
      })
    ]
  }
}



/**
 * @function 遍历各种devtool的配置，在打包时可以分别打包出对应的文件，方便对比差别
 */
module.exports = allModes.map(item => ({
  devtool: item,
  ...getConfig(item),
  output: {
    filename: `js/${item}.js`,
    path: path.join(__dirname, 'dist')
  },
}))