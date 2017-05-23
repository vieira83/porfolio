// routes.js
/* RESEARCH
  IndexRoute, Route, Router
  read https://github.com/ReactTraining/react-router
*/
'use strict';
import $ from "jquery";
import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import {Home} from './components/home';
import {About} from './components/about';
import {Jumbotron} from './components/jumbotron';
import {Porfolio} from './components/porfolio';
import {Footer} from './components/footer';
import {Contact} from './components/contact';
import {NoMatch} from './components/no_match';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';


import './css/porfolio.css';

// Main component
/* RESEARCH - Class ES6
*/
class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     contactPosition: 0,
   };
  }
  componentDidMount(){
    document.body.className='';
  }

  navigateToContact(event){
    event.preventDefault();
    var contactPosition = $('.porfolio-section.contact').offset(),
      body = $("html, body");

    body.stop().animate({scrollTop:contactPosition.top}, '1800', 'swing');
  }

  render(){
    var styleApp = {
      fontSize: '1.4rem'
    }
    const {history, location} = this.props;
    const liClasses = "porfolio-link nav-item";
    console.log(location);
    console.log(history.isActive("/home"));
    const isActive = {
      home: location.pathname ==="/" ? "active" : "",
      about: location.pathname ==="/about" ? "active" : "",
      porfolio: location.pathname ==="/porfolio" ? "active" : "",
      contact: location.pathname ==="/contact" ? "active" : "",
      resources: location.pathname ==="/resources" ? "active" : ""
    }
    return (
      <div>
        <Nav>
           <li className={liClasses + ' '+isActive.home} style = { styleApp }><Link to="/">Home</Link></li>
           <li className={liClasses + ' '+isActive.about}><Link to="/about">About</Link></li>
           <li className={liClasses + ' '+isActive.porfolio}><Link to="/porfolio">Porfolio</Link></li>
           <li className={liClasses + ' -contact '+isActive.contact} onClick={this.navigateToContact}><a>Contact</a></li>
           <li className={liClasses + ' '+isActive.resources}><Link to="/resources">Resources</Link></li>
           <li className={liClasses + ' last login '}><Link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
        </Nav>
        <Jumbotron/>
        { this.props.children }
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="porfolio" component={Porfolio}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
