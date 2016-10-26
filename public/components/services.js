'use strict';

import React, { Component } from 'react';
import {Button,Col, Row, Grid} from 'react-bootstrap/lib';

class Services extends Component {
  render(){
    return (<div className="porfolio-services-section">
        <Grid>
          <Row>
            <h1 className="porfolio-services-title">Services</h1>
            <hr/>
            <Col sm={4}>
              <div className="col-main-background">
                <h3 className="porfolio-services-col-title">
                  <span className="front-end-icon"></span>Front End Developement
                </h3>
                <p>Adipisicing ratione incidunt eaque expedita rerum porro inventore. Nihil sit ipsam iure officiis sit eos at quibusdam natus dignissimos natus dolore! Vel doloremque ipsa alias nihil harum laborum necessitatibus rerum?</p>
                <p><Button>View details »</Button></p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="col-main-background">
                <h3 className="porfolio-services-col-title">
                  <span className="back-end-icon"></span>
                  Back End Development
                </h3>
                <p>Sit quia nemo quis enim provident porro eaque accusamus tenetur provident aliquid commodi? Velit nesciunt maiores obcaecati totam praesentium sint vitae exercitationem quaerat maxime iusto et! Consequatur .</p>
                <p><Button>View details »</Button></p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="col-main-background">
                <h3 className="porfolio-services-col-title">
                  <span className="web-end-icon"></span>
                  Web Desgin
                </h3>
                <p>Dolor aliquid dolores perferendis repellendus cum! Quam maiores blanditiis cupiditate voluptatibus voluptas aliquid nisi placeat tempora. Rem debitis accusamus pariatur officia corrupti. Architecto fuga reiciendis quos rem hic? Suscipit dignissimos.</p>
                <p><Button>View details »</Button></p>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
