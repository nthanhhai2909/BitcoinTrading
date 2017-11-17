var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./api/models/UserModel'); // create model loading here
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/trading_bitcoint_db');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var router = require('./api/routers/UserRouter');
router(app);
app.listen(port, ()=> console.log("Server running on port " + port));