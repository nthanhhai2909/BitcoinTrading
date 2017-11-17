'use strict'
var mongoose = require('mongoose');
var student = mongoose.model('user');
exports.login = (req, res) =>{
    var username = req.body.username;
    var password = req.body.password;
    
};