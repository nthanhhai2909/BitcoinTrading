'use strict'
var mongoose = require('mongoose');
var Transaction = mongoose.model('transaction');


exports.getListTransaction = (req, res) =>{
    Transaction.find({}, (err, transactions)=>{
        if(err){
            res.send({status: 404});
        }
        res.send({status: 200, data:transactions});
    });
}

exports.addTransaction = (req, res) =>{
    var new_transaction = new Transaction({
        username_sent: req.body.username_sent,
        username_receive: req.body.username_receive,
        date: req.body.date,
        transaction_amount: req.body.transaction_amount,
        description: req.body._description
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
exports.getTransactionOfUser = (req, res) =>{
    var transactions = []
    // transaction sent
    Transaction.find({username_sent: req.params.username}).exec((err, data) =>{
		if(err){
			res.send({status: 404});
		}
		else{ 
            transactions = transactions.concat(data);
            // transaction receive
            Transaction.find({username_receive: req.params.username}).exec((err, data) =>{
                if(err){
                    res.send({status: 404});
                }
                else{
                    transactions = transactions.concat(data);
                    // sort transaction Ascending by data
                    transactions= transactions.sort((a,b) =>{
                        return parseFloat(b.date)-parseFloat(a.date);
                    });
                    let result = transactions.slice(0, transactions.length > 10? 10: transactions.length);
                    res.send({status: 200, data: result});
                
                }
            });
		}
    });

    
    

    
}
