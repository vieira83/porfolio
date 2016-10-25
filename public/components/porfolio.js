'use strict';

import React, { Component } from 'react';
import {Button, Col, Row, Grid} from 'react-bootstrap/lib';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';


export class Porfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me']};
  }
  render(){
    return (<div className="porfolio-section porfolio">
          <Grid>
            <Row className="row-centered">
              <h1 className="porfolio-title">Porfolio</h1>
              <h4 className="porfolio-sub-title">Examples of my Past Work:</h4>
              <ReactCSSTransitionGroup transitionName="name" transitionEnterTimeout={500} transitionAppear={true}
                transitionAppearTimeout={500} transitionLeaveTimeout={300}>
                <Col sm={5} className="col-centered">
                  <div className="col-main-background about">
                      <span className="porfolio-site-image">
                        <img src="~/../img/por/fanpierboston.jpg"/>
                      </span>
                      <div className="porfolio-porfolio-description">
                        <p className="porfolio-section-text">Fan Pier</p>
                      </div>

                  </div>
                </Col>
              </ReactCSSTransitionGroup>
              <Col sm={5} className="col-centered">
                <div className="col-main-background about">
                    <span className="porfolio-site-image">
                      <img src="~/../img/por/highland.jpg"/>
                    </span>
                    <div className="porfolio-porfolio-description">
                      <p className="porfolio-section-text">Highland</p>
                    </div>
                </div>
              </Col>
            </Row>
            <Row className="row-centered">
            <Col sm={5} className="col-centered">
              <div className="col-main-background about">
                  <span className="porfolio-site-image">
                  <img src="~/../img/por/twentytwolibertry.jpg"/></span>
                  <div className="porfolio-porfolio-description">
                    <p className="porfolio-section-text">Twenty Two Liberty </p>
                  </div>
              </div>
            </Col>
            <Col sm={5} className="col-centered">
              <div className="col-main-background about">
                  <span className="porfolio-site-image">
                    <img src="~/../img/por/belclarewellesley.jpg"/>
                  </span>
                  <div className="porfolio-porfolio-description">
                    <p className="porfolio-section-text">Belclare </p>
                  </div>
              </div>
            </Col>
            </Row>
            <Row className="row-centered">
            <Col sm={5} className="col-centered">
              <div className="col-main-background about">
                  <span className="porfolio-site-image">
                    <img src="~/../img/por/my_wiser_legacy.jpg"/>
                  </span>
                  <div className="porfolio-porfolio-description">
                    <p className="porfolio-section-text">My Wiser Health Legacy</p>
                  </div>
              </div>
            </Col>
            <Col sm={5} className="col-centered">
              <div className="col-main-background about">
                  <span className="porfolio-site-image">
                    <img src="~/../img/por/my_wiser_current1.jpg"/>
                  </span>
                  <div className="porfolio-porfolio-description">
                    <p className="porfolio-section-text"> My Wiser Health</p>
                  </div>
              </div>
            </Col>
            </Row>
          </Grid>
        </div>
    )
  }
}
