// app-server.js
require('babel-register')({
   presets: [ 'es2015', 'react' ]
});
var React = require('react'),
reactRouter = require( 'react-router'),
// RoutingContext = require('react-router/es6/RoutingContext'),
// ReactDOMServer = require('react-dom.dist.server'),
express = require('express'),
hogan = require('hogan-express'),

// Routes
routes = require('./routes');

// Express
const app = express()
app.engine('html', hogan)
app.set('views', __dirname + '/views')
app.use('/', express.static(__dirname + '/public/'))
app.set('port', (process.env.PORT || 3000))

app.get('*',(req, res) => {

  reactRouter.match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {

    // const reactMarkup = ReactDOMServer.renderToStaticMarkup(<RoutingContext {...renderProps}/>)
    //
    // res.locals.reactMarkup = reactMarkup

    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {

      // Success!
      res.status(200).render('index.html')

    } else {
      res.status(404).render('index.html')
    }
  })
})

app.listen(app.get('port'))

console.info('==> Server is listening in ' + process.env.NODE_ENV + ' mode')
console.info('==> Go to http://localhost:%s', app.get('port'))

//
// var path = require('path');
//
// app.get('public/css/bootstrap.min.css', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build/css/bootstrap.min.css'));
// });
//
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build/index.html'));
// });
//
// var webpack = require('webpack');
// var compiler = webpack(config);
//
// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));
//
// var express = require('express');
// var stormpath = require('express-stormpath');
// module.exports = {
//   entry: [
//     './src/app'
//   ],
//   devtool: 'eval-source-map',
//   output: {
//     path: __dirname,
//     filename: 'app.js',
//     publicPath: '/public/js/'
//   },
//   module: {
//     loaders: []
//   }
// };
// var app = express();
//
// app.use(stormpath.init(app, {
// 	web: {
// 		produces: ['application/json']
// 	}
// }));
//
// app.on('stormpath.ready', function () {
//   app.listen(3000, 'localhost', function (err) {
//     if (err) {
//       return console.error(err);
//     }
//     console.log('Listening at http://localhost:3000');
//   });
// });
