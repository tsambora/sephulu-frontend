const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/ClientApp.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/public',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.scss', '.css']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'sass-loader',
          options: {
            includePaths: ['./node_modules']
          }
        }]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['./node_modules']
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true,
  }
};
