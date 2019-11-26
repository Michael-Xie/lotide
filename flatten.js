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
const flatten = function(arr) {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flatArr.push(arr[i][j]);
      }
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
};

// TEST
assertArraysEqual(flatten([]), []); // empty array
assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]); //already flatten array
assertArraysEqual(flatten([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6]); // all elements are arrays
assertArraysEqual(flatten([[1, 2], 3, "4", [5, 6]]), [1, 2, 3, "4", 5, 6]); // some elements are arrays