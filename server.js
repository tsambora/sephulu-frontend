require('babel-register');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');
const App = require('./src/App').default;

const StaticRouter = ReactRouter.StaticRouter;
const port = 8080;
const baseTemplate = fs.readFileSync('./public/index.html');
const template = _.template(baseTemplate);

const favicon = require('serve-favicon');
const path = require('path');

const server = express();

server.get('*.js', function (req, res, next) {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  return next();
});

server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

server.use('/public', express.static('./public'));

server.use((req, res) => {
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context: context },
      React.createElement(App)
    )
  );

  if (context.url) {
    res.redirect(301, context.url);
  }

  res.write(template({ body: body }));
  res.end();
});

console.log('listening on ' + port);
server.listen(process.env.PORT || port);
