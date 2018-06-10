/*jshint esversion: 6 */

const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  routes = require('./routing/routes'),
  user = require('./models/user'),
  app = express();

const User = require('./models/user'),
  port = 3000;

mongoose.connect('mongodb://localhost:27017/playground-app');
mongoose.Promise = global.Promise;
app.set('secret', 'fake-secret');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/routes', routes);

routes(app);

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
