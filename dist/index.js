"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _config = _interopRequireDefault(require("./config"));
var _routes = _interopRequireDefault(require("./routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var StartApp = function StartApp(app) {
  _config["default"].main.middleWare(app);
  (0, _routes["default"])(app);
};
var _default = StartApp;
exports["default"] = _default;