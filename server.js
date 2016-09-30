// app-server.j/
require('babel-core/register')({
   presets: [ 'es2015', 'react' ]
});
var React = require('react'),
reactRouter = require( 'react-router'),
ReactDOMServer = require('react-dom/server'),
RoutingContext = require('react-router').RoutingContext,
match = require('react-router').match,
// RoutingContext = require('react-router/es6/RoutingContext'),
express = require('express'),
hogan = require('hogan-express'),

// Routes
routes = require('./public/routes').default;

// Express
const app = express()
app.engine('html', hogan)
app.set('views', __dirname + '/views')
app.use('/', express.static(__dirname + '/public/'))
app.set('port', (process.env.PORT || 3005))

app.get('*',(req, res) => {
  console.log("--- Initializing Routing---");
  console.log (req.url);
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    console.log("--- Start Rendering --- ");
    //RoutingContext is an undocumented feature and will be replaced by RouterContext in v2.0.0.
    //https://github.com/ReactTraining/react-router/blob/master/docs/guides/ServerRendering.md
    //Its role is to synchronously render the route component.
    //It is simply a wrapper around your component which inject context properties such as history, location and params.
    const reactMarkup = ReactDOMServer.renderToStaticMarkup(React.createElement(RoutingContext, renderProps))
    //
    res.locals.reactMarkup = reactMarkup
    console.log("--- renderProps");
    console.log (renderProps);
    if (error) {
      res.status(500).send(error.message)
      console.error(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      console.error("=> redirect location");
    } else if (renderProps) {

      // Success!
      console.info("=> rendering index.html");
      res.status(200).render('index.html')

    } else {
      //Means Route didn't match anything
      console.error("=> 404 Unable to render");
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
