const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {

  it("return empty array when given an empty array", () => {
    let actual = middle([]);
    let expected = [];
    assert.deepEqual(actual, expected);
  })

  it("return empty array when given a one element array", () => {
    let actual = middle([1]);
    let expected = [];
    assert.deepEqual(actual, expected);
  })

  it("return empty array when given a two element array", () => {
    let actual = middle([1, 2]);
    let expected = [];
    assert.deepEqual(actual, expected);
  })

  it("return the middle element when given a odd-number of elements array", () => {
    let actual = middle([1, 2, 3]);
    let expected = [2];
    assert.deepEqual(actual, expected);
  })

  it("return the middle two elements when given a even-number of elements array", () => {
    let actual = middle([1, 2, 3, 4]);
    let expected = [2, 3];
    assert.deepEqual(actual, expected);
  })
})

// assertArraysEqual(middle([]), []);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);