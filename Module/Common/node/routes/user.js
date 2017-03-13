var userCtrl = require('../controller/User.js');

module.exports = function(app) {
    app.get('/user', userCtrl.Index);
}