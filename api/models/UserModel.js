'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    fullname: {type: String},
    username: { type:String},
    password: {type:String},
    date: {type:String},
    idWallet : {type:String},
});

module.exports = mongoose.model('user', User);