const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    bundle: './'
  },
  output: {
    path: path.resolve('public'),
    filename: "[name].js"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    /*new webpack.optimize.UglifyJsPlugin(),*/
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/ ,
        query: {
          presets:[ 'es2015', 'react', 'stage-2' ]
        },
      },
      { test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/ ,
        query: {
          presets:[ 'es2015', 'react', 'stage-2' ]
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: [
            {
              loader: 'css-loader',
              query: {
                localIdentName: '[hash:8]',
                modules: true
              }
            }
          ]
        })
      },
    ]
  },
  watch: true
}
