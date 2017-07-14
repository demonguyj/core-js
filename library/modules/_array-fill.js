// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toIndex = require('./_to-index');
var toLength = require('./_to-length');
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};
