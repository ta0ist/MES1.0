var path = require('path');
var request = require('request');
var crypto = require('crypto');
var post_argu = require('../../../../routes/post_argu.js');

exports.Index = function(req, res) {
    res.render(res.render(path.resolve(__dirname, '../../web/view/login/index')));
}

exports.checkuser = function(req, res) {
    // var name = req.body.user.Name;
    // var md5 = crypto.createHash('md5'),
    //     pwd = 1;
    // var pwd = md5.update(req.body.user.Password).digest('hex');

    var method = post_argu.getpath(__filename, 'UserLogin')
    post_argu.post_argu(res, method, { userName: 'admin', password: 'admin' });

}