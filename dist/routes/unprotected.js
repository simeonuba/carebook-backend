"use strict";

var _controllers = _interopRequireDefault(require("../controllers"));
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Router = _express["default"].Router();
Router.post('/register', _controllers["default"].auth.regsiter);
Router.get('/', function (response, request) {
  return response.send('ok');
});
module.exports = Router;