var Common = {};
Common.login = require('./routes/login');
Common.main = require('./routes/main');

module.exports = function(app) {
    Common.login(app);
    Common.main(app);
}