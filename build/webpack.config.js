/**
 * webpack 基本配置
 */
module.exports = {
  mode: 'development', // mode: 'production'
  entry: './src/index.js',  // 入口文件
  output: {    // 编译完成后输出的文件
    path: __dirname,
    filename: './build/bundle.js'
  },
  // loader
  modules: {  
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [
        {loader: 'style-loader'},
        {
          loader: 'css-loader',
          options: { modules: true}
        }
      ]
    }]
  }, 
  // resolve
  resolve: {  // 设置模块如何被解析，修改一些解析的细节
    modules: [  // 解析模块时应该搜索的目录
      'node_modules',
      path.resolve(__dirname, "src")
    ],
    extensions: [".js", ".json", ".jsx", ".css"], // 引入模块时不带扩展名
    alias: {  // 创建 import 或 require 引入模块的别名
      '@': resolve('src')
    },
  }
  // plugins
  plugins: [
    {
      // mode: 'development'
      new HtmlWebpackPlugin({template: './src/index.html'}),  // 生产一个html文件
      new webpack.NamedModulesPlugin(),  // 开启模块热替换，显示模块的相对路径
      new webpack.DefinePlugin({  //创建一个在编译时可以配置的全局常量
        "process.env.NODE_ENV": JSON.stringify("development"),
        VERSION: JSON.stringify("5fa3b9")
      }),
      // mode: 'production'
      new UglifyJsPlugin({  // 压缩js文件
        uglifyOptions: {
          compress: { warnings: false }
        },
        sourceMap: false,
        parallel: true  // 使用多进程并行运行
      }),
      new webpack.DefinePlugin({  //创建一个在编译时可以配置的全局常量
        "process.env.NODE_ENV": JSON.stringify("production") 
      }),
      // 预编译所有模块到一个闭包中，避免各个模块单独打包成闭包，提升你的代码在浏览器中的执行速度
      new webpack.optimize.ModuleConcatenationPlugin(),
      // 编译出错时跳过输出阶段，确保输出资源不包含错误
      new webpack.NoEmitOnErrorsPlugin(),
      // 将公共模块拆出来建立一个独立文件
      new webpack.optimize.CommonsChunkPlugin({
        name: 'commons', // (公共 chunk(commnon chunk) 的名称)
        filename: 'commons.js', // (公共chunk 的文件名)
        minChunks: 3, // (模块必须被3个 入口chunk 共享)
        chunks: ["pageA", "pageB"], // 选择 chunks 的来源
      });
    }
  ]
};
