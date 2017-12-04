/*jshint esversion: 6 */

const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  }
});

let User = mongoose.model('User', UserSchema);

module.exports = User;
