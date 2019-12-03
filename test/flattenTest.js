const assert = require('chai').assert;
const flatten = require('../flatten');
describe("#flatten", () => {
  it("returns empty array when given an empty array", () => {
    const actual = flatten([]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
  //no nested arrays
  it("returns original array when there are no nested arrays", () => {
    const actual = flatten([1, 2, 3, 4, 5]);
    const expected = [1, 2, 3, 4, 5];
    assert.deepEqual(actual, expected);
  });
  //nested array within array
  it("returns flattened array when there are nested arrays", () => {
    const actual = flatten([1, 2, [3, 4], 5, [6]]);
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(actual, expected);
  });
  it("returns flattened array all elements are nested arrays", () => {
    const actual = flatten([[1], [2], [3, 4], [5, 6]]);
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(actual, expected);
  });
});

// // TEST
// assertArraysEqual(flatten([]), []); // empty array
// assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]); //already flatten array
// assertArraysEqual(flatten([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6]); // all elements are arrays
// assertArraysEqual(flatten([[1, 2], 3, "4", [5, 6]]), [1, 2, 3, "4", 5, 6]); // some elements are arrays