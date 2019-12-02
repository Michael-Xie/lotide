const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  
  for (let i in expected) {
    if (Array.isArray(expected[i]) && Array.isArray(actual[i])) {
      const isEqual = eqArrays(actual[i], expected[i]);
      if (!isEqual) {
        return false;
      }
    } else if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
