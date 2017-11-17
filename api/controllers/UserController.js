
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
                res.send('notfound');
            }
            else{
                if(req.body.password === data.password)
                {
                    res.send({status: 200});
                }
                else{
                    res.send("err");
                }
                    
                    
            }
        }
    });
};  

exports.register = function(req, res){
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
                        date:   req.body.date,
                        idWallet: idWalletRandom
                    });
                    new_user.save((err, date) =>{
                        if(err){
                            res.send(err);
                        }
                        else{
                            res.send({status: 200});
                        }
                    });
                }
                else{
                    res.send("err");
                }
                
            }
            else{
                res.send("err");
            }
            
        }
    });
};