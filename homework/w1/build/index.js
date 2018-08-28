'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Thumb = exports.Press = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Press = exports.Press = function () {
    function Press(button, count) {
        (0, _classCallCheck3.default)(this, Press);

        this.count = count || 0;
        this.button = button;
    }

    (0, _createClass3.default)(Press, [{
        key: 'init',
        value: function init() {
            this.button.onclick = function () {
                this.add();
            }.bind(this);
            this.renderCount();
        }
    }, {
        key: 'add',
        value: function add() {
            this.count += 1;
            this.renderCount();
        }
    }, {
        key: 'renderCount',
        value: function renderCount() {
            this.button.innerHTML = '点赞';
            this.button.className = 'button';
            var span = document.createElement('span');
            span.innerText = this.count;
            this.button.appendChild(span);
        }
    }]);
    return Press;
}();

var Thumb = exports.Thumb = function (_Press) {
    (0, _inherits3.default)(Thumb, _Press);

    function Thumb(button, count, iconClass) {
        (0, _classCallCheck3.default)(this, Thumb);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Thumb.__proto__ || (0, _getPrototypeOf2.default)(Thumb)).call(this, button, count));

        _this.iconClass = iconClass;
        return _this;
    }

    (0, _createClass3.default)(Thumb, [{
        key: 'renderCount',
        value: function renderCount() {
            this.button.innerHTML = "<span>点赞</span>";
            this.button.className = 'button';
            var i = document.createElement('i');
            i.className = 'iconfont icon-thumb-up';
            this.button.appendChild(i);
            var span = document.createElement('span');
            span.className = 'tip';
            span.innerText = this.count;
            this.button.appendChild(span);
        }
    }]);
    return Thumb;
}(Press);