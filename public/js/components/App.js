webpackJsonp([0],{

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(29);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(62);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDatepicker = __webpack_require__(150);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

        _this.state = {
            name: 'Harsh'
        };
        return _this;
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { id: 'home' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        _react2.default.createElement('img', { src: '/img/bitcoin-logo.png', className: 'bitcoin-logo' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            'Enter Transaction'
                        ),
                        _react2.default.createElement(
                            'label',
                            null,
                            'Crypto Amount'
                        ),
                        _react2.default.createElement('input', { type: 'text', name: 'amount', onChange: this.props.onInputChange, value: this.props.cryptoAmount }),
                        _react2.default.createElement(
                            'label',
                            null,
                            'Date'
                        ),
                        _react2.default.createElement(_reactDatepicker2.default, { selected: this.props.globalState.date, onChange: this.props.handleDateChange }),
                        _react2.default.createElement(
                            'button',
                            { type: 'submit' },
                            'Check Profits'
                        )
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(29);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(62);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = function (_Component) {
  _inherits(Results, _Component);

  function Results() {
    _classCallCheck(this, Results);

    var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this));

    _this.state = {
      name: 'Harsh'
    };
    return _this;
  }

  _createClass(Results, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'results' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement('div', { className: 'ads' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(
              'h3',
              null,
              'Your $1200 dollar investment is now '
            ),
            _react2.default.createElement(
              'h1',
              null,
              '$7300'
            ),
            _react2.default.createElement(
              'h4',
              null,
              'You made a 400% profit!'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'main-btn active' },
              'Need to keep track? Create an account with us!'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement('div', { className: 'ads' })
          )
        )
      );
    }
  }]);

  return Results;
}(_react.Component);

exports.default = Results;

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(29);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(62);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDatepicker = __webpack_require__(150);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _axios = __webpack_require__(357);

var _axios2 = _interopRequireDefault(_axios);

var _Home = __webpack_require__(358);

var _Home2 = _interopRequireDefault(_Home);

var _Results = __webpack_require__(359);

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      name: 'Harsh',
      location: "home",
      date: (0, _moment2.default)(),
      data: "",
      cryptoAmount: 1
    };
    _this.routingSystem = _this.routingSystem.bind(_this);
    _this.handleDateChange = _this.handleDateChange.bind(_this);
    _this.apiCall = _this.apiCall.bind(_this);
    _this.onInputChange = _this.onInputChange.bind(_this);
    return _this;
  }

  _createClass(Layout, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      //clearInterval(this.timerID);
      var self = this;
      _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD,EUR&ts=' + (0, _moment2.default)().unix() + '&api_key=961d32a441533c3cbd011d28df1297de607a049f6c3181295b46fd247b6c9793').then(function (response) {
        self.setState({ btcToday: response.data.BTC }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'routingSystem',
    value: function routingSystem() {
      switch (this.state.location) {
        case "home":
          return _react2.default.createElement(_Home2.default, { handleDateChange: this.handleDateChange, globalState: this.state, onInputChange: this.onInputChange });
          break;
        case "results":
          return _react2.default.createElement(_Results2.default, null);
          break;
        default:
          return _react2.default.createElement(_Home2.default, null);

      }
    }
  }, {
    key: 'handleDateChange',
    value: function handleDateChange(date) {
      var _this2 = this;

      this.setState({
        date: date
      }, function () {
        return console.log(_this2.state.date.unix());
      });
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(event) {
      this.setState = {
        cryptoAmount: event.target.value
      };
    }
  }, {
    key: 'apiCall',
    value: function apiCall() {
      /*https://min-api.cryptocompare.com/
      data/pricehistorical?fsym=BTC&tsyms=USD,EUR&ts=1543338706*/
      var self = this;
      _axios2.default.get("https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD,EUR&ts=1543338706&api_key=961d32a441533c3cbd011d28df1297de607a049f6c3181295b46fd247b6c9793").then(function (response) {
        self.setState({ data: response.data.BTC }, function () {
          console.log(self.state);
          var costPrice = self.state.data.USD;
          var newCostPrice = 1.5 * 100;
          newCostPrice = newCostPrice * costPrice / 100;
          var sellingPrice = self.state.btcToday.USD;
          var newSellingPrice = 1.5 * 100;
          newSellingPrice = newSellingPrice * sellingPrice / 100;
          if (newCostPrice < newSellingPrice) {
            //Gain
            var gain = newSellingPrice - newCostPrice;
            var gainPercentage = gain / newCostPrice * 100;
            gainPercentage = gainPercentage.toFixed(2);
            console.log('Profit Percentage is ' + gainPercentage + '%');
          } else {
            //Loss
            var loss = newCostPrice - newSellingPrice;
            var lossPercentage = loss / newCostPrice * 100;
            lossPercentage = lossPercentage.toFixed(2);
            console.log('Loss Percentage is ' + lossPercentage + '%');
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement(
              'div',
              { className: 'logo', onClick: this.apiCall },
              'The Coin ',
              _react2.default.createElement(
                'span',
                { className: 'logo-calculator' },
                'Calculator'
              )
            ),
            _react2.default.createElement(
              'nav',
              { className: 'menu' },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Register'
              )
            )
          ),
          this.routingSystem()
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[380]);