var mainCtrl = require('../controller/Main');

module.exports = function(app) {
    app.get('/', mainCtrl.Index);
}