"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PressButton = function () {
    function PressButton(element, count) {
        _classCallCheck(this, PressButton);

        this.count = count;
        this.element = element;
    }

    _createClass(PressButton, [{
        key: "click",
        value: function click() {
            var _this = this;

            this.element.click(function () {
                if (_this.count < 10) {
                    _this.element.css({
                        "-webkit-filter": "grayscale(0)"
                    });
                    $("#animation").addClass("count");
                    _this.count = add(_this.count);
                    setTimeout(function () {
                        $("#animation").removeClass("count");
                    }, 1000);
                } else {
                    _this.count = 0;
                    _this.element.css({
                        "-webkit-filter": "grayscale(1)"
                    });
                }
            });
        }
    }]);

    return PressButton;
}();

var Thumb = function (_PressButton) {
    _inherits(Thumb, _PressButton);

    function Thumb(element, count) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));
    }

    return Thumb;
}(PressButton);

exports.default = Thumb;
