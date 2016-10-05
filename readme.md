npm install
npm start


https://www.sitepoint.com/building-a-react-universal-blog-app-a-step-by-step-guide/


SERVER RENDERING WITH REACT Router:
  https://medium.com/@arpith/server-rendering-with-react-router-6ad13d71406e#.jl6gufp6i
  https://github.com/ReactTraining/react-router/blob/master/docs/API.md


How to use Webpack with React and Bootstrap:
  https://react-bootstrap.github.io/getting-started.html
  https://medium.com/@victorleungtw/how-to-use-webpack-with-react-and-bootstrap-b94d33765970#.sjlaaqlpd

  Best:
  https://github.com/mtscout6/react-bootstrap-getting-started/blob/step-3-solution/src/HeaderNavigation.js

GUIDE TO STYLING:
  1- Style keys are camelCased in order to be consistent with accessing the properties on DOM
  https://facebook.github.io/react/tips/inline-styles.html

webpack-isomorphic-tools:
  https://github.com/halt-hammerzeit/webpack-isomorphic-tools


REACT STATE:
  To make this all work, we are going to be relying on three APIs that our React Component exposes:

    componentDidMount
      This method gets called just after our component gets rendered (or mounted as React calls it).

    getInitialState
      This method runs just before your component gets mounted, and it allows you to modify a component's state object.

    setState
      This method allows you to update the value of the state object.
      var LightningCounter = React.createClass({
        getInitialState: function() {
          return {
            strikes: 0
          };
        },
        render: function() {
          return (
            <h1>{this.state.strikes}</h1>
          );
        }
      });
      //The above object that gets returned is set as the initial value for our component's state object. will be:
        var state = {
          strikes: 0;
        }
      USAGE:
        var LightningCounter = React.createClass({
        getInitialState: function() {
          return {
            strikes: 0
          };
        },
        render: function() {
          return (
            <h1>{this.state.strikes}</h1>
          );
        }
      });
