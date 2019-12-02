// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}` :
    `❌ Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(arr) {
  return arr.slice(1,arr.length);
};

module.exports = tail;