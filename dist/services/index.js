"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _registerService = _interopRequireDefault(require("./authentication/registerService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var services = {
  auth: {
    register: _registerService["default"]
  }
};
var _default = services;
exports["default"] = _default;