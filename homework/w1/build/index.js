'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Press = function () {
    function Press(button, count) {
        _classCallCheck(this, Press);

        this.count = count || 0;
        this.button = button;
    }

    _createClass(Press, [{
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

var Thumb = function (_Press) {
    _inherits(Thumb, _Press);

    function Thumb(button, count, iconClass) {
        _classCallCheck(this, Thumb);

        var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, button, count));

        _this.iconClass = iconClass;
        return _this;
    }

    _createClass(Thumb, [{
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