'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    fullname: String, 
    username: String,
    password: String,
    date: String,
    idWallet : String,
});

module.exports = mongoose.model('user', User);