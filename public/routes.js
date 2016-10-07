// routes.js
/* RESEARCH
  IndexRoute, Route, Router
  read https://github.com/ReactTraining/react-router
*/
import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import {About} from './components/about';
import {Porfolio} from './components/porfolio';
import {Contact} from './components/contact';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import './css/porfolio.css';

// Main component
/* RESEARCH
  Class ES6
*/
class App extends Component {
  componentDidMount(){
    document.body.className='';
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
           <li className="porfolio-link nav-item"><Link to="/contact">Contact</Link></li>
           <li className="porfolio-link nav-item"><Link to="/resources">Resources</Link></li>
           <li className="porfolio-link nav-item last"><Link to="/login">Login</Link></li>
        </Nav>
        <Jumbotron/>
        { this.props.children }
        <Footer/>
      </div>
    )
  }
}

// Pages
class Home extends Component {
  render(){
    return (<div>
        <h2>Home</h2>
        <Services></Services>
      </div>
    )
  }
}
class Footer extends Component {
  render(){
    return (<footer>
        <div className="footer-bar"></div>
        <div className="copyright">Copyright © 2016 Vladimir Fernandes</div>
      </footer>
    )
  }
}
class Jumbotron extends Component {
  render(){
    return (<div className="home-jumbotron">
        <div className="porfolio-jumbotron-container">
          <div className="porfolio-jumbotron-text">
            <span className="porfolio-jumbotron-name">Vladimir Fernandes</span>
            <div className="porfolio-jumbotron-pos">Full Stack Developer</div>
          </div>
          <div className="porfolio-jumbotron-buttons">
              <Link className="btn btn-primary button" to="/contact">Contact Me</Link>
              <Link className="btn btn-primary button" to="/porfolio">View Porfolio</Link>
          </div>
        </div>
        <div className="overlay"></div>
        <div className="porfolio-image">  </div>
      </div>
    )
  }
}


class Services extends Component {
  render(){
    return (<div>
        <Grid>
          <Row>
            <h1 className="porfolio-services-title">Services</h1>
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

class NoMatch extends Component {
  render(){
    return (<div>
        <h2>NoMatch</h2>
        <div>404 error</div>
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
