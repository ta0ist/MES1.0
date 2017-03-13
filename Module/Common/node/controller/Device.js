var path = require('path');
var session = require('express-session');



exports.Index = function(req, res) {
    res.render(res.render(path.resolve(__dirname, '../../web/view/device/index')));
}