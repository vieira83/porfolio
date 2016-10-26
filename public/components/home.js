'use strict';

import React, { Component } from 'react';
import {Button,Col, Row, Grid} from 'react-bootstrap/lib';

export class Home extends Component {
  render(){
    return (<div>
        <Services/>
      </div>
    )
  }
}

export class Services extends Component {
  render(){
    return (<div className="porfolio-services-section">
        <Grid>
          <Row>
            <h1 className="porfolio-services-title">Services</h1>
            <hr/>
            <Col sm={4}>
              <div className="col-main-background services">
                <h3 className="porfolio-services-col-title">
                  <span className="front-end-icon"></span>Front End Developement
                </h3>
                <div className="porfolio-services-description">
                  <p>Dolor aliquid dolores perferendis repellendus cum! Quam maiores blanditiis cupiditate voluptatibus voluptas aliquid nisi placeat tempora. Rem debitis accusamus pariatur officia corrupti. Architecto fuga reiciendis quos rem hic? Suscipit dignissimos.</p>
                  {/* <p><Button>View details »</Button></p>*/}
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="col-main-background services">
                <h3 className="porfolio-services-col-title">
                  <span className="back-end-icon"></span>
                  Back End Development
                </h3>
                <div className="porfolio-services-description">
                  <p>Dolor aliquid dolores perferendis repellendus cum! Quam maiores blanditiis cupiditate voluptatibus voluptas aliquid nisi placeat tempora. Rem debitis accusamus pariatur officia corrupti. Architecto fuga reiciendis quos rem hic? Suscipit dignissimos.</p>
                  {/* <p><Button>View details »</Button></p> */}
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="col-main-background services">
                <h3 className="porfolio-services-col-title">
                  <span className="web-end-icon"></span>
                  Web Desgin
                </h3>
                <div className="porfolio-services-description">
                  <p>Dolor aliquid dolores perferendis repellendus cum! Quam maiores blanditiis cupiditate voluptatibus voluptas aliquid nisi placeat tempora. Rem debitis accusamus pariatur officia corrupti. Architecto fuga reiciendis quos rem hic? Suscipit dignissimos.</p>
                  {/* <p><Button>View details »</Button></p>*/}
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
