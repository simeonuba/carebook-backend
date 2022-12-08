"use strict";

var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./src/index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
(0, _index.default)(app);
const PORT = process.env.PORT || 1200;
app.listen(PORT, () => {
  console.log('careBook Server started');
});