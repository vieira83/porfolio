// routes.js
/* RESEARCH
  IndexRoute, Route, Router
  read https://github.com/ReactTraining/react-router
*/
import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'

// Main component
/* RESEARCH
  Class ES6
*/

class App extends Component {
  componentDidMount(){
    document.body.className=''
  }
  render(){
    return (
      <div>
        <h1>React Universal Blog</h1>
           <nav>
              <ul>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/about">About</Link></li>
                 <li><Link to="/porfolio">Porfolio</Link></li>
                 <li><Link to="/contact">Contact</Link></li>
                 <li><Link to="/contact">Resources</Link></li>
              </ul>
           </nav>
        { this.props.children }
      </div>
    )
  }
}

// Pages
class Home extends Component {
  render(){
    return (
      <div>
        <h2>Home</h2>
        <div>Some home page content</div>
      </div>
    )
  }
}
class About extends Component {
  render(){
    return (
      <div>
        <h2>About</h2>
        <div>Some about page content</div>
      </div>
    )
  }
}
class Porfolio extends Component {
  render(){
    return (
      <div>
        <h2>Work</h2>
        <div>Some work page content</div>
      </div>
    )
  }
}
class Contact extends Component {
  render(){
    return (
      <div>
        <h2>Contact</h2>
        <div>Some contact page content</div>
      </div>
    )
  }
}
class NoMatch extends Component {
  render(){
    return (
      <div>
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
