'use strict';

import $ from "jquery";
import React, { Component } from 'react';
import { Link } from 'react-router';
//RESEARCH - {} in import versus no curly braces
export class Jumbotron extends Component {
  navigateToContact(event){
    event.preventDefault();
    var contactPosition = $('.porfolio-section.contact').offset(),
      body = $("html, body");

    body.stop().animate({scrollTop:contactPosition.top}, '1800', 'swing');
  }
  render(){
    return (<div className="home-jumbotron">
        <div className="porfolio-jumbotron-container">
          <div className="porfolio-jumbotron-text">
            <span className="porfolio-jumbotron-name">Vladimir Fernandes</span>
            <div className="porfolio-jumbotron-pos">Full Stack Developer</div>
          </div>

        </div>
        <div className="overlay"></div>
        <div className="porfolio-image">  </div>
        <div className="porfolio-buttons">
          <div className="porfolio-jumbotron-buttons">
              <a className="btn btn-primary button -contact" onClick={this.navigateToContact}>Contact Me</a>
              <Link className="btn btn-primary button" to="/porfolio">View Porfolio</Link> 
          </div>
        </div>
      </div>

    )
  }
}
