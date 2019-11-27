const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}` :
    `❌ Assertion Failed: ${actual} !== ${expected}`);
};

const isLetter = function(char) {
  return char.match(/[a-z]/i).length > 0;
};

const countLetters = function(str) {
  let letterCount = {};
  for (let char of str) {
    if (isLetter(char)) {
      if (letterCount[char]) {
        letterCount[char] += 1;
      } else {
        letterCount[char] = 1;
      }
    }
  }
  return letterCount;
};

assertEqual(countLetters("lighthouse in the house")["z"], undefined); // unfound letter, no counts
assertEqual(countLetters("lighthouse in the house")["h"], 4); // multiple counts for a letter
assertEqual(countLetters("lightHouse in the house")["n"], 1); // one count for a letter
assertEqual(countLetters("lightHouse in the house")["h"], 3); // case sensitive
