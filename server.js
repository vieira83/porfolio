
var path = require('path');

app.get('/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/css/bootstrap.min.css'));
});
 
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

var webpack = require('webpack'); 
var compiler = webpack(config);
 
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

var express = require('express');
var stormpath = require('express-stormpath');
module.exports = {
  entry: [
    './src/app'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/js/'
  },
  module: {
    loaders: []
  }
};
var app = express();

app.use(stormpath.init(app, {
	web: {
		produces: ['application/json']
	}
}));

app.on('stormpath.ready', function () {
  app.listen(3000, 'localhost', function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Listening at http://localhost:3000');
  });
});