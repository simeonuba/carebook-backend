"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _main = _interopRequireDefault(require("./main"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var config = {
  main: {
    middleWare: _main["default"]
  }
};
var _default = config;
exports["default"] = _default;