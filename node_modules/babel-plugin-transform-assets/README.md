# babel-plugin-transform-assets

Transforms importing of asset files at compile time using Babel. This plugin removes the need to run your server code through [Webpack](https://github.com/webpack/webpack) module bundler when using loaders such as file-loader, url-loader and building <s>isomorphic</s> universal apps. Aids in creating a cleaner, maintainable build process at the cost of yet another [Babel](https://github.com/babel/babel) [plugin](https://babeljs.io/docs/plugins/).

[![CircleCI](https://img.shields.io/circleci/project/jmurzy/babel-plugin-transform-assets.svg)](https://circleci.com/gh/jmurzy/babel-plugin-transform-assets)
[![npm version](https://img.shields.io/npm/v/babel-plugin-transform-assets.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-transform-assets)
[![npm](https://img.shields.io/npm/l/babel-plugin-transform-assets.svg)](https://github.com/jmurzy/babel-plugin-transform-assets/blob/master/LICENSE.md)

## Requirements
[Babel](https://github.com/babel/babel) v6 or higher.

## Installation

```sh
$ npm install babel-plugin-transform-assets
```

## Usage

### Via `.babelrc`

**.babelrc**

```json
{
  "plugins": [["transform-assets", {
                "extensions": ["svg"],
                "name": "[name].[ext]?[sha512:hash:base64:7]",
              }]]
}
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  plugins: [['transform-assets', {
              extensions: ['svg'],
              name: '[name].[ext]?[sha512:hash:base64:7]',
            }]]
});
```

### Release Notes

* 0.1.0 Minor changes, Update dependencies
* 0.0.1 Initial release
