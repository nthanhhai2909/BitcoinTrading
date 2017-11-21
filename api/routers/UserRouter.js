'use strict'
module.exports = function(app){
    var userController = require('../controllers/UserController');
    
    app.route('/login')
    .post(userController.login);

    app.route('/logup')
    .post(userController.logup);

    app.route('/userSendMoney')
    .put(userController.userSendMoney);
    
    app.route('/userReceiveMoney')
    .put(userController.userReceiveMoney);

    app.route('/user/:username')
    .get(userController.getProfileByUser);

    app.route('/user/wallet/:idWallet')
    .get(userController.getProfileByiWallet);

};