import React, { Component } from 'react';
// import Grid from 'react-bootstrap/lib/Grid';
// import Row from 'react-bootstrap/lib/Row';
import {Button,Col, Row, Grid, FormGroup, FormControl, ControlLabel} from 'react-bootstrap/lib';

function FieldGroup (props ) {
  var {id,label, help, ...props} = props;
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export class Contact extends Component {
  render(){
    return (<div className="porfolio-section contact">
        <Grid>
          <Row>
            <h1 className="porfolio-title">Contact Me</h1>
            <h4 className="porfolio-sub-title">Please Fill Out the form to contact me</h4>
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
                    <form>
                       <FieldGroup
                         id={"formControlsText"}
                         type={"text"}
                         label="Name"
                         placeholder="Enter text"
                       />
                       <FieldGroup
                         id={"formControlsText"}
                         type={"email"}
                         label="Email"
                         placeholder="Enter Email"
                       />
                       <FormGroup controlId="formControlsTextarea">
                         <ControlLabel>Textarea</ControlLabel>
                         <FormControl componentClass="textarea" placeholder="textarea" />
                       </FormGroup>
                       <Button type="submit">
                         Submit
                       </Button>
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
