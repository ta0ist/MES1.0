var loginCtrl = require('../controller/Login');

module.exports = function(app) {
    app.get('/login', loginCtrl.Index);

    app.post('/checkuser', loginCtrl.checkuser);
}