## Run the App
* npm install
* npm start
* npm run dev


https://www.sitepoint.com/building-a-react-universal-blog-app-a-step-by-step-guide/


## SERVER rendering with React Router:
  https://medium.com/@arpith/server-rendering-with-react-router-6ad13d71406e#.jl6gufp6i
  https://github.com/ReactTraining/react-router/blob/master/docs/API.md


## How to use Webpack with React and Bootstrap:
  https://react-bootstrap.github.io/getting-started.html
  https://medium.com/@victorleungtw/how-to-use-webpack-with-react-and-bootstrap-b94d33765970#.sjlaaqlpd

  Best:
  https://github.com/mtscout6/react-bootstrap-getting-started/blob/step-3-solution/src/HeaderNavigation.js

## Styling Guide:
  1. Style keys are camelCased in order to be consistent with accessing the properties on DOM
  https://facebook.github.io/react/tips/inline-styles.html

  2. webpack-isomorphic-tools:
    https://github.com/halt-hammerzeit/webpack-isomorphic-tools


## REACT STATE:
  To make this all work, we are going to be relying on three APIs that our React Component exposes:

    componentDidMount
      This method gets called just after our component gets rendered (or mounted as React calls it).

    _getInitialState_ - for ES5, _this.state_ inside the constructor for ES6
      This method runs just before your component gets mounted, and it allows you to modify a component's state object.
      The difference between constructor and getInitialState is the difference between ES6 and ES5 itself.
        getInitialState is used with React.createClass and
        this.state constructor is used with React.Component.

        Hence the question boils down to advantages/disadvantages of using ES6 or ES5.

        ES5
        var TodoApp = React.createClass({
          propTypes: {title: PropTypes.string.isRequired},
          getInitialState () {
            return {
              items: []
            };
          }
        });

        ES6
        class TodoApp extends React.Component {
          constructor () {
            super()
            this.state = {
              items: []
            }
          }
        });

    _setState_
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
      _USAGE_:
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


## webpack-dev-server and hot loader
1. install npm install -S webpack-dev-server
2. - run the command webpack-dev-server --progress --colors --content-base public --inline --hot
  * --content-base: folder where it would start
  * --hot: hot loader
