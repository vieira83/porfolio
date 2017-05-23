'use strict';

import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export class About extends Component {
  render(){
    return (<div className="porfolio-section about">
        <Grid>
          <Row className="about-content">
            <h1 className="porfolio-about-title">About</h1>
            <h4 className="porfolio-sub-title">Full Stack Developer</h4>
            <Col sm={12} className="col-main-background about">
              <div className="porfolio-about-description">
                <p className="porfolio-about-text">I have over 2 years of experience working in web development, I have experience working in front-end and back-end development. I have worked with different tools and languages such as Wordpress, HTML/CSS, javascript, Backbone.js, jQuery, PHP, Python, Django, MongoDB, etc, to create responsive and mobile ready web sites/App. </p>
              </div>
            </Col>
          </Row>
          <Row className="skills-content">
          <h1 className="porfolio-about-title">Skills</h1>
            <Col sm={12} className="col-main-background about">
              <div className="porfolio-about-skills">
                <div className="row">
                    <div className="col-sm-4">
                      <ul className="intro__list">
                        <li>HTML/HTML5</li>
                        <li>CSS/CSS3</li>
                        <li>Bootstrap</li>
                        <li>Grunt/Gulp</li>
                        <li>Angula.js/Backbone.js</li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                      <ul className="intro__list">
                        <li>Responsive Design</li>
                        <li>Handlebars.js</li>
                        <li>Python/Django</li>
                        <li>Postgres / MongoDB / MySql</li>
                        <li>PHP/Mysql</li><
                        li>Node.js</li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                      <ul className="intro__list">
                        <li>Pixel Perfect</li>
                        <li>WordPress</li>
                        <li>Css Preprocessors(Less)</li>
                        <li>Agile</li>
                        <li>PHP/Mysql</li><
                        li>Node.js</li>
                        <li>WordPress</li>
                        </ul>
                    </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="stats-content">
            <p>Experience in front-end and back-end development.</p>
          </Row>
        </Grid>
      </div>
    )
  }
}
