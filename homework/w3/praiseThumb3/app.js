'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serve = require('koa-static');
var render = require('koa-swig');
var co = require('co');
var controller = require('./controller/index');
var config = require('./config/config');

var app = new _koa2.default();
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html'
}));
controller.init(app, _koaSimpleRouter2.default);
app.use(serve(config.staticDir));

app.listen(3001, function () {
    console.log('listen 3001');
});

module.exports = app;
