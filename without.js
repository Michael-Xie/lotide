// TEST/ASSERTION/HELPER FUNCTIONS
const eqArrays = function(actual, expected) {
  // false when length of the array is different
  if (actual.length !== expected.length) {
    return false;
  }
  // false when corresponding elements of actual and expected are different
  for (let i = 0; i < expected.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

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

// ACTUAL FUNCTION
const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};

// TESTS
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]); //empty itemsToRemove
assertArraysEqual(without([], [1]), []); //empty source
assertArraysEqual(without(["no", "ones"], [1]), ["no", "ones"]); //no matches

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); //one match and one item in itemsToRemove
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); //one match and more than one items in itemsToRemove
assertArraysEqual(without(["1", "2", "3"], [1, "2", "3"]), ["1"]); //two matches and more than one items in itemsToRemove

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);