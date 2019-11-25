// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}` :
    `❌ Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(arr) {
  return arr.slice(1,arr.length);
};

// Test Case 1: Check the returned array elements
let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Empty array
result = tail([]);
assertEqual(result.length, 0);

// Test Case 3: One element array
result = tail(["Hello"]);
assertEqual(result.length, 0);

// Test Case 4: Original array is not modified
let arr = ["Hello", "Worldly", "World"];
result = tail(arr);
assertEqual(arr.length, 3);
assertEqual(arr[0], "Hello");
assertEqual(arr[1], "Worldly");
assertEqual(arr[2], "World");