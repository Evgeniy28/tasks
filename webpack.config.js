const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',

  output: {
    path: __dirname + '/public/build/',
    publicPath: 'build/',
    filename: 'bundle.js'
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : 'hidden-source-map',

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },

  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: __dirname + '/src/',
        loader: "babel",
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style!css!postcss",
        include: __dirname + '/src/'
      },
      {
        test: /\.scss$/,
        loader: "style!css!postcss!sass",
        include: __dirname + '/src/'
      },
      {
        test: /\.gif$/,
        loader: "url?limit=10000&mimetype=image/gif"
      },
      {
        test: /\.jpg$/,
        loader: "url?limit=10000&mimetype=image/jpg"
      },
      {
        test: /\.png$/,
        loader: "url?limit=10000&mimetype=image/png"
      },
      {
        test: /\.svg/,
        loader: "url?limit=26000&mimetype=image/svg+xml"
      },
      {
        test: /\.jsx$/,
        include: __dirname + '/src/',
        loader: "react-hot",
      },
      {
        test: /\.jsx$/,
        include: __dirname + '/src/',
        loader: "babel",
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: "json"
      }
    ]
  }
}
