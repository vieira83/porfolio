'use strict';

import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export class About extends Component {
  render(){
    return (<div className="porfolio-section about">
        <Grid>
          <Row>
            <h1 className="porfolio-about-title">About</h1>
            <h4 className="porfolio-sub-title">Full Stack Developer</h4>
            <Col sm={11} className="col-main-background about">
              <div className="porfolio-about-image-cont">
                  <span className="porfolio-about-image"></span>
              </div>
              <div className="porfolio-about-description">
                <p className="porfolio-about-text">I have over 2 years of experience working in web development, I have experience working in front-end and back-end development. I have worked with different tools and languages such as Wordpress, HTML/CSS, javascript, Backbone.js, jQuery, PHP, Python, Django, MongoDB, etc, to create responsive and mobile ready web sites/App. </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={11} className="col-main-background about">
              <div className="porfolio-about-skills">
                <h4>SKILLS:</h4>
                <div>Responsive Front-end Development
                  <ul class="intro__list"><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Performance</li><li>WordPress</li></ul>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
