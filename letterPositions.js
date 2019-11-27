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

const isLetter = function(char) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet.includes(char.toLowerCase());
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (isLetter(char)) {
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
  }
  //console.log(results);
  return results;
};

// TEST
let smallStr = "hello";
assertArraysEqual(letterPositions(smallStr)["h"], [0]);
assertArraysEqual(letterPositions(smallStr)["e"], [1]);
assertArraysEqual(letterPositions(smallStr)["l"], [2, 3]);
assertArraysEqual(letterPositions(smallStr)["o"], [4]);

let strWithSpaceAndCap = "hello wOrld";
assertArraysEqual(letterPositions(strWithSpaceAndCap)["o"], [4]);
assertArraysEqual(letterPositions(strWithSpaceAndCap)["O"], [7]);

