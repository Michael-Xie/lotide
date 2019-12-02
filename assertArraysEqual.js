const eqArrays = require("./eqArrays");

const arrToStr = function(arr) {
  let arrStr = "[";

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      arrStr += `"${arr[i]}"`;
    } else {
      arrStr += arr[i];
    }
    arrStr = i === arr.length - 1 ? arrStr : arrStr + ", ";
  }
  arrStr += "]";

  return arrStr;
};

const assertArraysEqual = function(actual, expected) {
  console.log(eqArrays(actual, expected) ?
    `✅ Assertion Passed: ${arrToStr(actual)} === ${arrToStr(expected)}` :
    `❌ Assertion Failed: ${arrToStr(actual)} !== ${arrToStr(expected)}`);
};

module.exports = assertArraysEqual;
