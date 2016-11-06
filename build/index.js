"use strict";

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

require("babel-polfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _from2.default)("aaa"));

var sum = function sum(a, b) {
  return a + b;
};
var total = sum(1, 2);
var x = sum(2, 3);
console.log(total);