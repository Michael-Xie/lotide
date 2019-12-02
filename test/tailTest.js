const assert = require('chai').assert;
const tail   = require('../tail');


describe("#tail", () => {
  

  it("returns tail of arr", () => {
    let result = tail(["Hello", "Lighthouse", "Labs"]);
    let expected = ["Lighthouse", "Labs"];
    assert.deepEqual(result, expected);
  });

  // it("returns length 2 for the tail of ['Hello', 'Lighthouse', 'Labs']", () => {
  //   let result = tail(["Hello", "Lighthouse", "Labs"]);
  //   assert.strictEqual(result.length, 2);
  // });

  // it("returns for the tail of ['Hello', 'Lighthouse', 'Labs'] at element 0", () => {
  //   let result = tail(["Hello", "Lighthouse", "Labs"]);
  //   assert.strictEqual(result[0], "Lighthouse");
  // });

  // it("returns for the tail of ['Hello', 'Lighthouse', 'Labs'] at element 1", () => {
  //   let result = tail(["Hello", "Lighthouse", "Labs"]);
  //   assert.strictEqual(result[1], "Labs");
  // });

  it("returns empty array when given an empty array", () => {
    let actual = tail([]);
    let expected = [];
    assert.deepEqual(actual, expected);
  });

  it("returns an empty array when given a one element array", () => {
    let actual = tail(["Hello"]);
    let expected = [];
    assert.deepEqual(actual, expected);
  });

  // it("returns a length of 3 for original array after using tail", () => {
  //   let arr = ["Hello", "Worldly", "World"];
  //   tail(arr);
  
  //   assert.strictEqual(arr.length, 3);
  // });

  // it("returns 'Hello' from original array at element 0 after using tail", () => {
  //   let arr = ["Hello", "Worldly", "World"];
  //   tail(arr);
  
  //   assert.strictEqual(arr[0], "Hello");
  // });

  // it("returns 'Worldly' from original array at element 1 after using tail", () => {
  //   let arr = ["Hello", "Worldly", "World"];
  //   tail(arr);
  
  //   assert.strictEqual(arr[1], "Worldly");
  // });

  // it("returns 'World' from original array at element 2 after using tail", () => {
  //   let arr = ["Hello", "Worldly", "World"];
  //   tail(arr);
  
  //   assert.strictEqual(arr[2], "World");
  // });  it("returns length 2 for the tail of ['Hello', 'Lighthouse', 'Labs']", () => {
  //   let result = tail(["Hello", "Lighthouse", "Labs"]);
  //   assert.strictEqual(result.length, 2);
  // });

  it("returns 'original array has not been modified after using tail", () => {
    let arr = ["Hello", "Worldly", "World"];
    tail(arr);
    let actual = arr;
    let expected = ["Hello", "Worldly", "World"];
  
    assert.deepEqual(actual, expected);
  });



});
// // Test Case 1: Check the returned array elements
// let result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2: Empty array
// result = tail([]);
// assertEqual(result.length, 0);

// // Test Case 3: One element array
// result = tail(["Hello"]);
// assertEqual(result.length, 0);

// // Test Case 4: Original array is not modified
// let arr = ["Hello", "Worldly", "World"];
// result = tail(arr);
// assertEqual(arr.length, 3);
// assertEqual(arr[0], "Hello");
// assertEqual(arr[1], "Worldly");
// assertEqual(arr[2], "World");
