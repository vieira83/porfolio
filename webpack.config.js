var path = require('path');
var webpack = require('webpack');

// webpack.config.js
if(process.env.NODE_ENV === 'development'){
  var loaders = ['react-hot','babel']
} else {
  var loaders = ['babel']
}
module.exports = {
  devtool: 'eval',
  entry: [
    './public/js/app.js'
  ],
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js',
    publicPath: './public/js'
  },
  module: {
    loaders: [
    { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {
        presets: [ 'react','es2015', 'stage-0']
    } }
    ]
  }
};
