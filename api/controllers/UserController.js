'use strict'
var mongoose = require('mongoose');
var User = mongoose.model('user');
var randomstring = require("randomstring");
var passwordHash = require('password-hash');
exports.login = function(req, res){
    let hashedPassword = 'sha1$3I7HRwy7$cbfdac6008f9cab4083784cbd1874f76618d2a97';
    console.log(passwordHash.verify('password123', hashedPassword)); // true
    User.findOne({'username': req.body.username}, 'username password _id', (err, data)=>{
        if(err){
            res.send(err);
        }
        else{
            if(data === null){
                res.send({status: 404});
            }
            else{
                let hashedPassword = data.password;
                if(passwordHash.verify(req.body.password, hashedPassword))
                {
                    res.send({status: 200, id:data._id});
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
    let hashedPassword = passwordHash.generate(req.body.password);
    console.log('passHash', hashedPassword);
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
                        password: hashedPassword, 
                        idWallet: idWalletRandom,
                        balance: "1000",
                    });
                    new_user.save((err, date) =>{
                        if(err){
                            res.send({status: 404, message:""});
                        }
                        else{
                            res.send({status: 200, message:""});
                        }
                    });
                }
                else{
                    res.send({status: 404, message:""});
                }
                
            }
            else{
                res.send({status: 404, message: "User Already exsit"});
            }
            
        }
    });
};

exports.userSendMoney = (req, res) =>{
    
    User.findById(req.body._id, (err, data) => {
        if(err){
            res.send({status: 404});
        }
        else{
            let tranfer = parseFloat(req.body.tranfer);
            let blance = parseFloat(data.balance);
            let result = Number(Number(blance - tranfer).toFixed(12));
    
            if(result < 0){
                res.send({status: 404});
                return;
            }
            data.balance =  (result).toString();
            data.save((err) =>{
                if(err){
                    res.send({status: 404});
                }
                else{
                    res.send({status:200, balance: data.balance});
                }
            });
        }
    }); 
}

exports.userReceiveMoney = (req, res) =>{
    User.findById(req.body._id, (err, data) => {
        if(err){
            res.send({status: 404});
        }
        else{
            let tranfer = parseFloat(req.body.tranfer);
            let blance = parseFloat(data.balance);
            let result = Number(Number(blance + tranfer).toFixed(12));
            console.log("hihi", Number(Number(blance + tranfer).toFixed(12)));
            data.balance =  result.toString();
            data.save((err) =>{
                if(err){
                    res.send({status: 404});
                }
                else{
                    res.send({status:200, balance: data.balance});
                }
            });
        }
    }); 
}