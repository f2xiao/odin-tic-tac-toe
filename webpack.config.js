 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   mode: 'development',
   entry: {
     index: './src/index.js',
     gameBoard:'./src/gameBoard.js'
   },
   devtool: 'inline-source-map',
   devServer: {
     static: './dist',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Tic Tac Toe',
       template: './src/index.html'
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
  optimization: {
    runtimeChunk: 'single',
  },
 };
