var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var User = require('./api/models/UserModel'); // create model loading here
var index = require('./api/routers/IndexRouter');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/trading_bitcoint_db');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


var routerUser = require('./api/routers/UserRouter');
routerUser(app);
app.use('/', index);
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
  
app.listen(port, ()=> console.log("Server running on port " + port));