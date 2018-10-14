"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _b = _interopRequireDefault(require("./b.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

async function a() {
  await (0, _b.default)();
  console.log('aaa');
}

var _default = a;
exports.default = _default;