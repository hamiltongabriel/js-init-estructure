// @ts-check
/* eslint-disable */
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');;
const path = require('path');
const env = require('yargs').argv.env;

let libraryName = 'PacktDataStructuresAlgorithms';

let plugins = [],
  outputFile;

if (env === 'build') {
  // plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.gabriel';
} else {
  outputFile = libraryName + '.gabriel';
}

const config = {
  entry: __dirname + '/src/gabriel/index.gabriel',
  devtool: 'source-map',
  output: {
    path: __dirname + '/examples',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src/gabriel')],
    extensions: ['.json', '.gabriel']
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  }
 // plugins: plugins
};

module.exports = config;
