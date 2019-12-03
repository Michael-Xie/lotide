const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("returns tail of arr", () => {
    let result = tail(["Hello", "Lighthouse", "Labs"]);
    let expected = ["Lighthouse", "Labs"];
    assert.deepEqual(result, expected);
  });

  it("returns empty array when given an empty array", () => {
    let actual = tail([]);
    let expected = [];
    assert.deepEqual(actual, expected);
  });

  it("returns an empty array when given a one element array", () => {
    let actual = tail(["Hello"]);
    let expected = [];
    assert.deepEqual(actual, expected);
  });

  it("returns 'original array has not been modified after using tail", () => {
    let arr = ["Hello", "Worldly", "World"];
    tail(arr);
    let actual = arr;
    let expected = ["Hello", "Worldly", "World"];

    assert.deepEqual(actual, expected);
  });
});