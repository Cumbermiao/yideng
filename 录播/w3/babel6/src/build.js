'use strict';

require('babel-polyfill');

var _a = require('./a.js');

var _a2 = _interopRequireDefault(_a);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var b = function b() {
    (0, _a2.default)();
    console.log('i am b');
};
