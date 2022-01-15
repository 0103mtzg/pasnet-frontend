const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.[hash].js'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          template:'./src/index.html',
      }),
    ],
    module:{
        rules: [
            { 
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
              },
            },
            { 
              test: /\.html$/,
              use: [
                {
                  loader: 'html-loader',
                  options: {
                    minimize: true,
                  },
                },
              ],
            },
          ],
    }
  }