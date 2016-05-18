var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: [
    './js/app.js'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
    { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/,query: {
        presets: ['es2015', 'react']
    } }
    ]
  }
};