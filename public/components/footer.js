'use strict';

import React, { Component } from 'react';

export class Footer extends Component {
  render(){
    return (<footer>
        <div className="footer-bar">
          <div>Please follow me on:</div>
          <a href="">
            <span className="social-icon google_plus"></span>
          </a>
          <a href="">
            <span className="social-icon twitter"></span>
          </a>
          <a href="">
            <span className="social-icon linkedin"></span>
          </a>
          <a href="">
            <span className="social-icon github"></span>
          </a>
        </div>
        <div className="copyright">Copyright © 2016 Vladimir Fernandes</div>
      </footer>
    )
  }
}
