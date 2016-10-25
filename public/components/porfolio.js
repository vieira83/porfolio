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
                        <div className="porfolio-site-image-overflow">
                          <div className="porfolio-site-image-navigation--content">
                            <h4 className="porfolio-site-image-navigation--header">Cycling</h4>
                            <p className="porfolio-site-image-navigation--summary">
                              Take the ride of a lifetime in New&nbsp;Zealand.
                              Pedal through picturesque towns, ancient emerald forests and dramatic volcanic vistas.
                              Miles of cycling trails showcase the best of both islands.
                            </p>
                          </div>
                        </div>
                      </div>

                  </div>
                </Col>
              </ReactCSSTransitionGroup>
              <Col sm={5} className="col-centered">
                <div className="col-main-background porfolio">
                    <span className="porfolio-site-image">
                      <img src="~/../img/por/highland.jpg"/>
                    </span>
                    <div className="porfolio-porfolio-description">
                      <p className="porfolio-section-text">Highland</p>
                      <div className="porfolio-site-image-overflow">
                        <div className="porfolio-site-image-navigation--content">
                          <h4 className="porfolio-site-image-navigation--header">Cycling</h4>
                          <p className="porfolio-site-image-navigation--summary">
                            Take the ride of a lifetime in New&nbsp;Zealand.
                            Pedal through picturesque towns, ancient emerald forests and dramatic volcanic vistas.
                            Miles of cycling trails showcase the best of both islands.
                          </p>
                        </div>
                      </div>
                    </div>
                </div>
              </Col>
            </Row>
            <Row className="row-centered">
            <Col sm={5} className="col-centered">
              <div className="col-main-background porfolio">
                  <span className="porfolio-site-image">
                  <img src="~/../img/por/twentytwolibertry.jpg"/></span>
                  <div className="porfolio-porfolio-description">
                    <p className="porfolio-section-text">Twenty Two Liberty </p>
                    <div className="porfolio-site-image-overflow">
                      <div className="porfolio-site-image-navigation--content">
                        <h4 className="porfolio-site-image-navigation--header">Cycling</h4>
                        <p className="porfolio-site-image-navigation--summary">
                          Take the ride of a lifetime in New&nbsp;Zealand.
                          Pedal through picturesque towns, ancient emerald forests and dramatic volcanic vistas.
                          Miles of cycling trails showcase the best of both islands.
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </Col>
            <Col sm={5} className="col-centered">
              <div className="col-main-background porfolio">
                  <span className="porfolio-site-image">
                    <img src="~/../img/por/belclarewellesley.jpg"/>
                  </span>
                  <div className="porfolio-porfolio-description">
                    <p className="porfolio-section-text">Belclare </p>
                    <div className="porfolio-site-image-overflow">
                      <div className="porfolio-site-image-navigation--content">
                        <h4 className="porfolio-site-image-navigation--header">Cycling</h4>
                        <p className="porfolio-site-image-navigation--summary">
                          Take the ride of a lifetime in New&nbsp;Zealand.
                          Pedal through picturesque towns, ancient emerald forests and dramatic volcanic vistas.
                          Miles of cycling trails showcase the best of both islands.
                        </p>
                      </div>
                    </div>
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
                    <div className="porfolio-site-image-overflow">
                      <div className="porfolio-site-image-navigation--content">
                        <h4 className="porfolio-site-image-navigation--header">Cycling</h4>
                        <p className="porfolio-site-image-navigation--summary">
                          Take the ride of a lifetime in New&nbsp;Zealand.
                          Pedal through picturesque towns, ancient emerald forests and dramatic volcanic vistas.
                          Miles of cycling trails showcase the best of both islands.
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </Col>
            <Col sm={5} className="col-centered">
              <div className="col-main-background porfolio">
                  <span className="porfolio-site-image">
                    <img src="~/../img/por/my_wiser_current1.jpg"/>
                  </span>
                  <div className="porfolio-porfolio-description">
                    <p className="porfolio-section-text"> My Wiser Health</p>
                    <div className="porfolio-site-image-overflow">
                      <div className="porfolio-site-image-navigation--content">
                        <h4 className="porfolio-site-image-navigation--header">Cycling</h4>
                        <p className="porfolio-site-image-navigation--summary">
                          Take the ride of a lifetime in New&nbsp;Zealand.
                          Pedal through picturesque towns, ancient emerald forests and dramatic volcanic vistas.
                          Miles of cycling trails showcase the best of both islands.
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </Col>
            </Row>
          </Grid>
        </div>
    )
  }
}
