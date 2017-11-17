'use strict'
module.exports = function(app){
    var userController = require('../controllers/UserController');
    
    app.route('/login')
    .post(userController.login);

    app.route('/register')
    .post(userController.register);
};