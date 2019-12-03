const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", function () {
  it("returns true when two arrays are the same and numbers", function () {
    const actual = eqArrays([1, 2, 3], [1, 2, 3]);
    const expected = true;
    assert.strictEqual(actual, expected);
  })

  it("returns true when two arrays are different and numbers", function () {
    const actual = eqArrays([1, 2, 3], [1, 3, 2]);
    const expected = false;
    assert.strictEqual(actual, expected);
  })

  it("returns true when two arrays are same and strings", function () {
    const actual = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    const expected = true;
    assert.strictEqual(actual, expected);
  })

  it("returns false when two arrays have numeric num and string num", function () {
    const actual = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    const expected = false;
    assert.strictEqual(actual, expected);
  })

  it("returns true for two identical nested arrays", function () {
    const actual = eqArrays([[2, 3], [4]], [[2, 3], [4]]);
    const expected = true;
    assert.strictEqual(actual, expected);
  })

  it("returns false for two different nested arrays", function () {
    const actual = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]);
    const expected = false;
    assert.strictEqual(actual, expected);
  })

  it("returns true for two identical 4D arrays", function () {
    const actual = eqArrays([[2, 3], [4], [[[5]]]] , [[2, 3], [4], [[[5]]]]);
    const expected = true;
    assert.strictEqual(actual, expected);
  })

  it("returns false for two different 4D arrays", function () {
    const actual = eqArrays([[2, 3], [4], [[[5, 6]]]] , [[2, 3], [4], [[[5]]]]);
    const expected = false;
    assert.strictEqual(actual, expected);
  })
})