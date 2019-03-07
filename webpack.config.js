// webpack v4
const path = require('path')

// 自定义测试插件
const HelloWorldPlugin = require('./customPlugins/hello-world');

// Mini-CSS 插件旨在取代 extract-text 插件，并为你提供更好的兼容性。我重新修改了我的 Webpack 文件，使用
// mini-css-extract-plugin来编译 style.css。
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 创建.html 文件模板。在./src 目录的 index.html
// html 插件才能将这个文件作为模板使用。
const HtmlWebpackPlugin = require('html-webpack-plugin')
// Hash
const WebpackMd5Hash = require('webpack-md5-hash')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// clean dist
const CleanWebpackPlugin = require('clean-webpack-plugin')
// 可以在 package => scripts 里的 "run" 配置 --config ./webpack.config.js,否则默认读取 webpack.config.js 文件
module.exports = {
  // 如果在 package.json 中配置了 --entry .xxx/yyy.js 那么这里的配置的【entry】将不起作用.
  // webpack --mode development --config ./webpack.config.js --entry ./src/target.js  --watch
  // entry: { main: './src/main.js' }, // OK

  // entry ------ OK
  // entry: {
  //   main: ['babel-polyfill', './src/main.js']
  // },
  // entry ------ OK

  // entry ------ OK
  entry: ['babel-polyfill', './src/main.js'],
  // entry ------ OK

  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js' // 测试
    // filename: 'main.js'
    filename: '[name].[chunkhash].js'
  },
  resolve: {

    alias: {
      // 必须加,否则运行时会报错误和警告.
      vue$: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
          // 如果遇到模块"@babel/core"冲突，说明某些预加载的 babel 依赖项不兼容
          // yarn add @babel/core --dev
        }
      },
      // 解析element-ui中的图标和字体
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader"
      },
      {
        test: /\.(gif|png|jp?g|svg)$/i,
        exclude: /node_modules/,
        loader: "file-loader"
      },
      {
        test: /\.scss$|\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // make sure to include the plugin for the magic
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    // rm -rf ./dist  删除./dist 文件夹其其中的所有文件
    new HtmlWebpackPlugin({
      inject: true, // 是否动态插入生成的js和css文件
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash(),
    new HelloWorldPlugin({ options: '测试测试HelloPlugins' })
  ]
}