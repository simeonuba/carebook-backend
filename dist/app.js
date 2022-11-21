"use strict";

var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
(0, _index["default"])(app);
var PORT = process.env.PORT || 1200;
app.listen(PORT, function () {
  console.log('careBook Server started');
});