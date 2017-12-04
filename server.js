/*jshint esversion: 6 */

const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  app = express();

const User = require('./user'),
  port = 3000;

  mongoose.connect('mongodb://localhost:27017/playground-app', { useMongoClient: true });
  mongoose.Promise = global.Promise;

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // create a new user
  app.post('/users', (req, res) => {
      let user = new User({
        email: req.body.email,
        password: req.body.password
      });

      user.save().then(() => {
        console.log(user);
        res.send(user);
      })
      .catch((e) => {
        res.status(400).send(e);
      });
  });

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
