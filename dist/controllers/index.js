"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _register = _interopRequireDefault(require("./auth/register.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var controllers = {
  auth: {
    regsiter: _register["default"]
  }
};
var _default = controllers;
exports["default"] = _default;