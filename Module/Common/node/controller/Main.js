var path = require('path');
var session = require('express-session');
exports.Index = function(req, res) {
    // if (!req.session.user)
    res.redirect('/');
    res.render(res.render(path.resolve(__dirname, '../../web/view/main/index')));
}