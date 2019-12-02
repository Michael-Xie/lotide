const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns first element of array when given an array of numbers", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns first element of array when given a single element array", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns first element of array when  given an array of strings", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("return undefined for empty array", () => {
    assert.strictEqual(head([]), undefined);
  });
});