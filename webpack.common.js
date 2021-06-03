const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  resolve: {
    alias: {
      vue$: path.resolve(__dirname, 'src/lib/vue/dist/vue.esm.js'),
      '@': path.resolve(__dirname, 'src/')
    }
  },
  externals: {
    jquery: 'jQuery',
    lodash: '_'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, // 加快编译速度，不包含node_modules文件夹内容
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        {
          loader: 'eslint-loader',
          options: {
            // eslint options (if necessary)
            fix: true
          }
        }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            optipng: {
              enabled: false
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            gifsicle: {
              interlaced: false
            },
            webp: {
              quality: 75
            }
          }
        }
        ]
      }]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   // filename: devMode ? '[name].css' : '[name].[hash].css', // 设置最终输出的文件名
    //   // chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    //   filename: '[name].[hash].css', // 设置最终输出的文件名
    //   chunkFilename: '[id].[hash].css'
    // }),
    new HtmlWebpackPlugin({
      title: 'Document', // 默认值：Webpack App
      filename: 'main.html', // 默认值： 'index.html'
      template: path.resolve(__dirname, 'src/main.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true // 移除属性的引号
      }
    }),
    new CleanWebpackPlugin()
  ]
};
