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
      color: 'white',
      backgroundColor: '#f1f1f1'
    }
    return (
      <div>
        <Nav>
           <li className="porfolio-link nav-item active" style = { styleApp }><Link to="/">Home</Link></li>
           <li className="porfolio-link nav-item"><Link to="/about">About</Link></li>
           <li className="porfolio-link nav-item"><Link to="/porfolio">Porfolio</Link></li>
           <li className="porfolio-link nav-item -contact" onClick={this.navigateToContact}>Contact</li>
           <li className="porfolio-link nav-item"><Link to="/resources">Resources</Link></li>
           <li className="porfolio-link nav-item last login"><Link to="/login">Login</Link></li>
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
