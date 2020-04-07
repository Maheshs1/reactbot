"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _logo = _interopRequireDefault(require("./logo.svg"));

require("./App.css");

var _Layout = _interopRequireDefault(require("./container/Layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_Layout.default, null));
}

var _default = App;
exports.default = _default;
"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders learn react link', function () {
  var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_App.default, null)),
      getByText = _render.getByText;

  var linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./ChatBox.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ChatBox = /*#__PURE__*/function (_React$Component) {
  _inherits(ChatBox, _React$Component);

  var _super = _createSuper(ChatBox);

  function ChatBox() {
    var _this;

    _classCallCheck(this, ChatBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      message: ""
    };

    _this.onTyping = function (e) {
      _this.setState({
        message: e.target.value
      });
    };

    _this.clearTyping = function (e) {
      e.preventDefault();

      _this.setState({
        message: ""
      });
    };

    return _this;
  }

  _createClass(ChatBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "ChatBox"
      }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        value: this.state.message,
        onChange: this.onTyping
      }), /*#__PURE__*/_react.default.createElement("button", {
        onClick: function onClick(e) {
          _this2.clearTyping(e);

          _this2.props.sendMessage(_this2.state.message);
        }
      }, "Send")));
    }
  }]);

  return ChatBox;
}(_react.default.Component);

var _default = ChatBox;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./ChatMessage.css");

var _Button = _interopRequireDefault(require("../../UI/Button/Button"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ChatMessage = /*#__PURE__*/function (_React$Component) {
  _inherits(ChatMessage, _React$Component);

  var _super = _createSuper(ChatMessage);

  function ChatMessage() {
    var _this;

    _classCallCheck(this, ChatMessage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      inputValue: "",
      isDelayed: false,
      messages: [],
      shouldShowUserMessage: false
    };

    _this.handleInputUsingValue = function (value) {
      _this.setState({
        inputValue: value
      });
    };

    _this.handleInput = function (e) {
      _this.setState({
        inputValue: e.target.value
      });
    };

    _this.handleForm = function (e) {
      if (e) e.preventDefault();

      _this.props.accepted(_this.state.inputValue);
    };

    return _this;
  }

  _createClass(ChatMessage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$message = this.props.message,
          msg = _this$props$message.msg,
          questionType = _this$props$message.questionType,
          ans = _this$props$message.ans,
          type = _this$props$message.type,
          buttons = _this$props$message.buttons,
          radioButtons = _this$props$message.radioButtons;
      var userMessageState = ["Message", "UserMessage"]; // false stands for answering, true stands for answered

      console.log("b", buttons);
      var delay = this.props.message.delay;
      if (delay === undefined) delay = null;
      var question = null;
      var typeProp = {
        value: this.state.inputValue,
        onChange: this.handleInput,
        style: {
          padding: 10,
          border: "none",
          borderBottom: "2px solid grey",
          backgroundColor: "transparent",
          color: "white",
          fontSize: 14,
          outline: "none"
        }
      };

      if (this.state.messages.length === 0) {
        if (Array.isArray(msg)) {
          var _delay = 0;
          msg.map(function (m) {
            _delay += 1000;
            setTimeout(function () {
              var msgs = _toConsumableArray(_this2.state.messages);

              msgs.push(m);

              _this2.setState({
                messages: msgs
              });
            }, _delay);
          });
          setTimeout(function () {
            _this2.setState({
              shouldShowUserMessage: true
            });
          }, 1000 * msg.length);
        } else {
          var msgs = _toConsumableArray(this.state.messages);

          msgs.push(msg);
          this.setState({
            messages: msgs,
            shouldShowUserMessage: true
          });
        }
      }

      if (ans !== null) {
        question = /*#__PURE__*/_react.default.createElement("p", {
          className: "Message UserMessage"
        }, ans);
      } else {
        userMessageState.push("AnsweringQuestion");

        if (questionType === 1) {
          console.log(ans);
          var optionButtons;

          if (buttons !== undefined) {
            optionButtons = buttons.map(function (b) {
              return /*#__PURE__*/_react.default.createElement(_Button.default, {
                onClick: b.acceptance ? function () {
                  return _this2.props.accepted(b.value);
                } : function () {
                  return _this2.props.declined(b.value);
                },
                styling: b.acceptance ? "Success" : "Danger"
              }, b.text);
            });
          } else if (radioButtons !== undefined) {
            optionButtons = radioButtons.map(function (rb) {
              console.log(rb);
              return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactstrap.Input, _extends({
                type: type
              }, typeProp, {
                name: rb.text,
                value: rb.value,
                onChange: function onChange(e) {
                  console.log("---------------------------------");

                  _this2.handleInput(e);

                  setTimeout(function () {
                    (rb.acceptance ? function () {
                      return _this2.props.accepted(rb.value);
                    } : function () {
                      return _this2.props.declined(rb.value);
                    })();
                  }, 0);
                }
              })), rb.value);
            });
          }

          question = /*#__PURE__*/_react.default.createElement("div", {
            className: userMessageState.join(" ")
          }, optionButtons);
        } else if (questionType === 0) {
          console.log(type);
          var options = this.props.message.options;
          var input;

          if (type === "carousel") {
            userMessageState.push("UserCarousel");
            input = options.map(function (option) {
              return /*#__PURE__*/_react.default.createElement("div", {
                className: "carousel",
                onClick: function onClick() {
                  _this2.handleInputUsingValue(option.title);

                  setTimeout(function () {
                    _this2.handleForm();
                  }, 1);
                }
              }, /*#__PURE__*/_react.default.createElement("img", {
                className: "carousel-img",
                src: option.imgSrc
              }), /*#__PURE__*/_react.default.createElement("p", {
                className: "carousel-title",
                style: {
                  fontStyle: "bold"
                }
              }, option.title), /*#__PURE__*/_react.default.createElement("p", {
                className: "carousel-desc"
              }, option.desc));
            });
          } else {
            input = /*#__PURE__*/_react.default.createElement(_reactstrap.Input, _extends({
              type: type
            }, typeProp));

            if (options !== undefined) {
              input = /*#__PURE__*/_react.default.createElement(_reactstrap.Input, _extends({
                type: type
              }, typeProp, {
                onChange: function onChange(e) {
                  _this2.handleInput(e);

                  setTimeout(function () {
                    _this2.handleForm(e);
                  }, 0);
                }
              }), options.map(function (o) {
                return /*#__PURE__*/_react.default.createElement("option", {
                  style: {
                    backgroundColor: "#25CEB6",
                    padding: 10
                  }
                }, o);
              }), " ");
            }
          } //Default type: Input


          question = /*#__PURE__*/_react.default.createElement("form", {
            onSubmit: this.handleForm,
            className: userMessageState.join(" ")
          }, input, /*#__PURE__*/_react.default.createElement("button", {
            style: {
              display: "none"
            }
          }));
        }
      }

      console.log(this.state.messages);

      var view = /*#__PURE__*/_react.default.createElement("div", null, this.state.messages.map(function (msg) {
        return /*#__PURE__*/_react.default.createElement("p", {
          className: "Message"
        }, msg);
      }), this.state.shouldShowUserMessage ? question : null);

      console.log(this.state.isDelayed, delay);

      if (delay !== null) {
        var t = setTimeout(function () {
          _this2.setState({
            isDelayed: true
          });
        }, delay);

        if (this.state.isDelayed) {
          delay = null;
          clearTimeout(t);
          return view;
        } else {
          return /*#__PURE__*/_react.default.createElement("p", null);
        }
      }

      return view;
    }
  }]);

  return ChatMessage;
}(_react.default.Component);

var _default = ChatMessage;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ChatMessage = _interopRequireDefault(require("../component/ChatMessage/ChatMessage"));

var _ChatBox = _interopRequireDefault(require("../component/ChatBox/ChatBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ChatUI = /*#__PURE__*/function (_React$Component) {
  _inherits(ChatUI, _React$Component);

  var _super = _createSuper(ChatUI);

  function ChatUI() {
    var _this;

    _classCallCheck(this, ChatUI);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      messages: [{
        msg: "What Is Your Name?",
        questionType: 0,
        type: "text",
        ans: null,
        isCamRequired: false
      }],
      currentQuestion: 0
    };

    _this.addMessage = function (message) {
      var newMessage = _toConsumableArray(_this.state.messages);

      newMessage.push(message);

      _this.setState({
        messages: newMessage
      });

      console.log("sdf", newMessage);
    };

    _this.accepted = function (value) {
      if (_this.state.currentQuestion > _this.props.allQuestions.length) return;
      console.log(_this.state.currentQuestion, _this.props.allQuestions.length);

      var messages = _toConsumableArray(_this.state.messages);

      if (typeof value !== "string") messages[messages.length - 1].ans = "Yes";else messages[messages.length - 1].ans = value;

      _this.setState(function (prevState) {
        var currentQuestion = prevState.currentQuestion;

        if (currentQuestion < _this.props.allQuestions.length) {
          messages.push(_this.props.allQuestions[_this.state.currentQuestion]); // prevState.currentQuestion + 1;
        }

        return {
          messages: messages,
          currentQuestion: currentQuestion + 1
        };
      });
    };

    _this.declined = function (value) {
      if (_this.state.currentQuestion > _this.props.allQuestions.length) return;
      console.log(_this.state.currentQuestion, _this.props.allQuestions.length);

      var messages = _toConsumableArray(_this.state.messages);

      messages[messages.length - 1].ans = value;

      _this.setState(function (prevState) {
        console.log(_this.state.currentQuestion, _this.props.allQuestions.length);
        var currentQuestion = prevState.currentQuestion + 2;

        if (currentQuestion < _this.props.allQuestions.length) {
          messages.push(_this.props.allQuestions[_this.state.currentQuestion + 1]); //currentQuestion = prevState.currentQuestion + 1;
        }

        return {
          messages: messages,
          currentQuestion: currentQuestion
        };
      });
    };

    return _this;
  }

  _createClass(ChatUI, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.state.currentQuestion, this.props.allQuestions.length);
      var chats = this.state.messages.map(function (message) {
        console.log(message);
        return /*#__PURE__*/_react.default.createElement(_ChatMessage.default, {
          message: message,
          accepted: _this2.accepted,
          declined: _this2.declined,
          ans: message.ans
        });
      });
      var response = null;

      if (this.state.currentQuestion > this.props.allQuestions.length) {
        response = /*#__PURE__*/_react.default.createElement("h3", null, "Thanks For Answering The Questions");
      }

      return /*#__PURE__*/_react.default.createElement("div", null, chats, response);
    }
  }]);

  return ChatUI;
}(_react.default.Component);

var _default = ChatUI;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ChatUI = _interopRequireDefault(require("./ChatUI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Layout = /*#__PURE__*/function (_React$Component) {
  _inherits(Layout, _React$Component);

  var _super = _createSuper(Layout);

  function Layout() {
    var _this;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.allQuestions = [{
      msg: "Which Restaurant You Like?",
      questionType: 0,
      type: "carousel",
      options: [{
        imgSrc: "https://www.biggerbolderbaking.com/wp-content/uploads/2015/05/BBB71-Homemade-Ice-Cream-Milkshakes-Thumbnail-v.1.jpg",
        title: "Varieties MilkShake",
        desc: "Delightful And Tasty"
      }, {
        imgSrc: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/milkshake.jpg?itok=n_3au7e1",
        title: "Chocolate MilkShake",
        desc: "Delightful And Tasty"
      }, {
        imgSrc: "https://www.twopeasandtheirpod.com/wp-content/uploads/2013/03/Chocolate-Mint-Brownie-Milkshake-4-480x500.jpg",
        title: "Icecream MilkShake",
        desc: "Delightful And Tasty"
      }, {
        imgSrc: "https://www.queensleeappetit.com/wp-content/uploads/2018/09/Brownie-Milkshake.jpg",
        title: "Creamy MilkShake",
        desc: "Delightful And Tasty"
      }],
      ans: null
    }, {
      msg: "Do You Know The Purchase Date?",
      questionType: 1,
      buttons: [{
        text: "Yes",
        value: "geeg",
        acceptance: true
      }, {
        text: "No",
        value: "Sdgjlk;",
        acceptance: false
      }],
      ans: null
    }, {
      msg: ["We Get To Know You Have Manufactured This Device", "And Also Received Recommendations to Appoint You", "How Good You Are in In This Field? "],
      questionType: 0,
      type: "select",
      options: ["Good", "Average", "Bad", "Better", "Best"],
      ans: null
    }, {
      msg: "Do You Know The Model Of The Device?",
      questionType: 1,
      type: "radio",
      radioButtons: [{
        text: "Of Course",
        value: "Of Course",
        acceptance: true
      }, {
        text: "I dont Know It",
        value: "I dont Know It",
        acceptance: false
      }],
      ans: null
    }, {
      msg: "What Is The Model Of The Device?",
      questionType: 0,
      ans: null
    }];
    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_ChatUI.default, {
        allQuestions: this.allQuestions
      });
    }
  }]);

  return Layout;
}(_react.default.Component);

var _default = Layout;
exports.default = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

var _App = _interopRequireDefault(require("./App"));

var serviceWorker = _interopRequireWildcard(require("./serviceWorker"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_App.default, null), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.unregister = unregister;
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = "".concat(process.env.PUBLIC_URL, "/service-worker.js");

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config); // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.

        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://bit.ly/CRA-PWA');
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    }).catch(function (error) {
      console.error(error.message);
    });
  }
}
"use strict";

require("@testing-library/jest-dom/extend-expect");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var button = function button(props) {
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: props.onClick,
    className: ["Button", props.styling].join(" ")
  }, props.children);
};

var _default = button;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var input = function input(props) {
  var inputView = null;
  console.log(props, inputView);

  switch (props.type) {
    case "text":
      inputView = /*#__PURE__*/_react.default.createElement("input", _extends({
        type: "text"
      }, props.typeProp));
      break;

    case "password":
      inputView = /*#__PURE__*/_react.default.createElement("input", _extends({
        type: "password"
      }, props.typeProp));
      break;

    case "color":
      inputView = /*#__PURE__*/_react.default.createElement("input", _extends({
        type: "color"
      }, props.typeProp));
      break;

    default:
      inputView = /*#__PURE__*/_react.default.createElement("input", _extends({
        type: "text"
      }, props.typeProp));
      break;
  }

  console.log(props, inputView);
  return inputView;
};

var _default = input;
exports.default = _default;
