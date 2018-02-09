const config = require('./webpack.config.js');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production")
    }
  })
);

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);

config.plugins.push(
  new webpack.optimize.AggressiveMergingPlugin()
);

config.plugins.push(
  new CompressionPlugin({ test: /\.js/ })
);

module.exports = config;
