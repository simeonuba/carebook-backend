"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _unprotected = _interopRequireDefault(require("./unprotected"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = function router(app) {
  app.use(_unprotected["default"]);
};
var _default = router;
exports["default"] = _default;