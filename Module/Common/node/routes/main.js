var mainCtrl = require('../controller/Main.js');

module.exports = function(app) {
    app.get('/main', mainCtrl.Index);
}