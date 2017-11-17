'use strict'
module.exports = (app) =>{
    var userController = require('../controllers/UserController');
    
    app.route('/login')
    .get(userController.login);

    app.route('/register')
    .post(userController.register);
}