"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _authverify = _interopRequireDefault(require("./validation/authverify"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var verify = {
  checkUser: _authverify["default"]
};
var _default = verify;
exports["default"] = _default;