const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", function () {
  it("returns letter positions of a word with repeated letters", function () {
    const actual = letterPositions("hello")["l"];
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  })

  it("returns letter position of a word, case-sensitive", function () {
    const actual = letterPositions("helLo")["L"];
    const expected = [3];
    assert.deepEqual(actual, expected);
  })

  it("returns letter positions of a word with no repeated letters", function () {
    const actual = letterPositions("hello")["o"];
    const expected = [4];
    assert.deepEqual(actual, expected);
  })

  it("returns undefined for an empty space in a sentence", function () {
    const actual = letterPositions("lighthouse in the house")[" "];
    const expected = undefined;
    assert.strictEqual(actual, expected)
  })

  it("returns undefined for number in sentance", function () {
    const actual = letterPositions("lighthouse 1n the house")["1"];
    const expected = undefined;
    assert.strictEqual(actual, expected)
  })
})