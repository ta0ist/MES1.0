var Common = {};
Common.login = require('./routes/login');
Common.main = require('./routes/main');
Common.user = require('./routes/user');
Common.device = require('./routes/device');

module.exports = function(app) {
    Common.login(app);
    Common.main(app);
    Common.user(app);
    Common.device(app);
}