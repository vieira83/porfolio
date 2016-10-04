import { Router } from 'react-router';
var React = require('react'),
ReactDOM = require( 'react-dom'),
createBrowserHistory = require('history').createHistory,
history = new createBrowserHistory();

//routes
import routes from './routes';

const Routes = (
  <Router history={ history }>
    { routes }
  </Router>
)

const app = document.getElementById('app-container')
console.log("tes front");

ReactDOM.render(Routes, app) // similar to ReactDOM.render


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, IndexRoute, Route } from 'react-router';
// import createHashHistory from 'history/lib/createHashHistory';
//
// ReactDOM.render(
//   <Router history={createHashHistory({ queryKey: false })}>
//   </Router>,
//   document.getElementById('app-container')
// );
