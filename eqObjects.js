const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}` :
    `❌ Assertion Failed: ${actual} !== ${expected}`);
};

const isObject = function(object) {
  return typeof (object) === "object" && !Array.isArray(object);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  for (let key of Object.keys(object1)) {
    if (isObject(object1[key]) && isObject(object2[key])) {
      const isEqual = eqObjects(object1[key], object2[key]);
      if (!isEqual) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
// TEST

// console.log(eqObjects({}, {}));

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);

assertEqual(eqObjects({ a: { z: 1 }, b: { c: 3 } }, { a: { z: 1 }, b: { c: 3 } }), true);
assertEqual(eqObjects({ a: { z: 1, x: 2, y: { p: 5 } }, b: { c: 3 } }, { a: { z: 1, y: { p: 5 }, x: 2 }, b: { c: 3 } }), true); // mix order y

assertEqual(eqObjects({ a: { z: 1, x: 2, y: { p: 5 } }, b: { c: 4 } }, { a: { z: 1, y: { p: 5 }, x: 2 }, b: { c: 3 } }), false); // last key diff
assertEqual(eqObjects({ a: { z: 1, x: 2, y: { p: 6, q: 7 } }, b: { c: 4 } }, { a: { z: 1, y: { p: 6 }, x: 2 }, b: { c: 4 } }), false); // 3rd level object different diff
assertEqual(eqObjects({ a: { z: 1, x: 2, y: { p: 6, q: 7 } }, b: { c: 4 } }, { a: { z: 1, y: { p: 6, q: 7}, x: 2 }, b: { c: 4 } }), true); // 3rd level objects same

assertEqual(eqObjects({ a: { z: 1 }, b: { c: 3, d: { e: {f: 4}}} }, { a: { z: 1 }, b: { c: 3, d: { e: {f: 4}} } }), true); // => 4th level objects sames
assertEqual(eqObjects({}, {}), true); // => empty objects
