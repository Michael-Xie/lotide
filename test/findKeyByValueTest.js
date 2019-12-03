const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns key when value is found in object", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };

    let actual = findKeyByValue(bestTVShowsByGenre, "The Wire");
    let expected = "drama";
    assert.strictEqual(actual, expected);
  });

  it("returns undefined when no key was found in object", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };

    let actual = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    let expected = undefined;
    assert.strictEqual(actual, expected);

  });

  it("returns undefined when there is no object", () => {
    let actual = findKeyByValue({}, "That '70s Show");
    let expected = undefined;
    assert.strictEqual(actual, expected);
  });
});
