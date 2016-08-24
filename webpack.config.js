var webpack = require('webpack')
//plugins 是插件项，插件CommonsChunkPlugin会在多入口文件情况下自动将复用的js生成common.js
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
  //页面入口文件配置
  entry:{
    app: './src/app.js', //app首页公共JS
    list: './src/list.js',    //列表页等其他入口JS
  },

  //入口文件输出配置 （即入口文件最终要生成什么名字的文件、存放到哪里）
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: '[name].js'
  },

  //插件项
  plugins: [
      //打包UglifyJs屏蔽错误
      new webpack.optimize.UglifyJsPlugin({
          compress:{
              warnings:false
          },
          mangle:{
              except:['$super','$','exports','require']
          }
      }),
      //生成公用js
      commonsPlugin
  ],

  module: {
    //加载器配置
    loaders: [
      {test: /\.vue$/,loader: 'vue'},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'}
    ]
  },

  // example: if you wish to apply custom babel options
  // instead of using vue-loader's default:
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },

  externals: {

  },
}

 