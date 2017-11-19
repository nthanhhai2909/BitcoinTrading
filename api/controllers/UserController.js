
'use strict'
var mongoose = require('mongoose');
var User = mongoose.model('user');
var randomstring = require("randomstring");

exports.login = function(req, res){
    User.findOne({'username': req.body.username}, 'username password', (err, data)=>{
        if(err){
            res.send(err);
        }
        else{
            if(data === null){
                res.send({status: 404});
            }
            else{
                if(req.body.password === data.password )
                {
                    res.send({status: 200});
                }
                else{
                    res.send({status: 404});
                }     
                    
            }
        }
    });
};  

exports.logup = function(req, res){
    let idWalletRandom = randomstring.generate();
    User.findOne({'username': req.body.username}, 'username', (err, user) =>{
        if(err){
            res.send(err);
        }
        else{
            if(user === null){
                if(req.body.password === req.body.confirm){
                    var new_user = new User({
                        fullname: req.body.fullname,
                        username: req.body.username,
                        password: req.body.password,
                        idWallet: idWalletRandom
                    });
                    new_user.save((err, date) =>{
                        if(err){
                            res.send({status: 200});
                        }
                        else{
                            res.send({status: 200});
                        }
                    });
                }
                else{
                    res.send({status: 404});
                }
                
            }
            else{
                res.send({status: 404});
            }
            
        }
    });
};