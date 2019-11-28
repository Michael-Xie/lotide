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

const takeUntil = function(array, callback) {
  let taken = [];
  for (value of array) {
    if(!callback(value)) {
      taken.push(value);
    } else{
      break;
    }
  }
  return taken;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; // found in arr
let results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
results1 = takeUntil(data1, x => x > 10) // none found in arr
assertArraysEqual(results1, [1, 2, 5, 7, 2, -1, 2, 4, 5]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]); // str data
