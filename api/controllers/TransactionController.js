'use strict'
var mongoose = require('mongoose');
var Transaction = mongoose.model('transaction');


exports.getListTransaction = (req, res) =>{
    Transaction.find({}, (err, transactions)=>{
        if(err){
            res.send({status: 404});
        }
        res.json(transactions);
    });
}

exports.addTransaction = (req, res) =>{
    var new_transaction = new Transaction({
        username_sent: req.body.username_sent,
        username_receive: req.body.username_receive,
        date: req.body.date,
        transaction_amount: req.body.transaction_amount
    });

    new_transaction.save((err, data) => {
        if(err){
            res.send({status: 404});
        }
        else{
            res.send({status: 200});
        }
    });
}
