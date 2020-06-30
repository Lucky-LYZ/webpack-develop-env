const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: __dirname + '/src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
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
          }
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    host: '127.0.0.1', //指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，可指定为当前主机ip
    port: 9000, // 端口号
    contentBase: './dist', // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
    hot: true,
    open: true, //启用打开后，开发服务器启动后将自动打开浏览器
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 用于生成 index.html
    new HtmlWebpackPlugin({
      title: 'Ideal Webpack Develop Env',
      meta: {
        viewport: 'width=device-width'
      },
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
