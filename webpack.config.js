var webpack = require('webpack')
//plugins 是插件项，这里我们使用了一个 CommonsChunkPlugin的插件，它用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用。
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
  //页面入口文件配置
  entry: './src/main.js',
  //入口文件输出配置 （即入口文件最终要生成什么名字的文件、存放到哪里）
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: 'build.js'
  },
  //插件项
  // plugins: [commonsPlugin],
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

 