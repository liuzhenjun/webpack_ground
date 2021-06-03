const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: devMode ? '[name].css' : '[name].[hash].css', // 设置最终输出的文件名
      // chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
      filename: '[name].[hash].css', // 设置最终输出的文件名
      chunkFilename: '[id].[hash].css'
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      })

    ]
  }
};

module.exports = merge(common, prodConfig);
