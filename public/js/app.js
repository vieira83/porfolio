var React = require('react'),
Router = require( 'react-router'),
reactDom= require( 'react-dom'),
createBrowserHistory = require('history/lib/createBrowserHistory'),

//routes
routes = require( '../../routes');

const Routes = (
  <Router history={history}>
  { routes }
  </Router>
)

const app = document.getElementByID('app-container')
reactDom.render(routes, app) // similar to ReactDOM.render


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
