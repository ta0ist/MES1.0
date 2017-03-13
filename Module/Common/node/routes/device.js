var deviceCtrl = require('../controller/Device.js');

module.exports = function(app) {
    app.get('/device', deviceCtrl.Index);
}