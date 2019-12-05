/**
 * webpack 基本配置
 */
module.exports = {
  entry: './src/index.js',  // 入口文件
  output: {    // 编译完成后输出的文件
    path: __dirname,
    filename: './build/bundle.js'
  },
  modules: {  
    // 编译规则
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]
  }
};
