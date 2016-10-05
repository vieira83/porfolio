import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export class Contact extends Component {
  render(){
    return (<div className="porfolio-section contact">
        <Grid>
          <Row>
            <h1 className="porfolio-title">Contact Me</h1>
            <Col sm={5} className="col-main-background contact">
              <div className="porfolio-contact-map-container">
                  <span className="porfolio-contact-map">
                    MAP
                  </span>
              </div>

            </Col>
            <Col sm={5}>
              <div className="porfolio-contact-form-container">
                  <div className="porfolio-contact-form">

                    <form method="post" enctype="multipart/form-data" action="/contact/">
                      <ul>
                        <li>
                          <label class="gfield_label" for="input_2_1">Name<span class="gfield_required">*</span></label><input name="input_1" id="input_2_1" type="text" value="" class="medium" tabindex="1"/>
                        </li>
                        <li>
                          <label class="gfield_label" for="input_2_1">Email<span class="gfield_required">*</span></label><input name="input_4" id="input_2_4" type="email" value="" class="medium" tabindex="2"/>
                        </li>
                      </ul>
                      <textarea name="input_3" id="input_2_3" class="textarea medium" tabindex="4" rows="10" cols="50"></textarea>
                      <input type="submit" id="gform_submit_button_2"/>
                    </form>
                  </div>
              </div>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
