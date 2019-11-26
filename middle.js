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
const middle = function(array) {
  // array with one or two elements return an empty array
  let midArr = [];
  if (array.length === 1 || array.length === 2 || array.length === 0) {
    return midArr;
  }

  // array with even number of elements, return middle two elements as an array
  // array with odd number of elements, return middle element as an array
  if (array.length % 2 === 0) {
    let lowerMid = Math.floor(array.length / 2);
    let upperMid = lowerMid + 1;
    midArr.push(lowerMid, upperMid);
  } else {
    let mid = Math.ceil(array.length / 2);
    midArr.push(mid);
  }
  return midArr;
};

// TEST CODE
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);