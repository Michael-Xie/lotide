const findKeyByValue = function(obj, value) {
  let foundKey;

  for (let key in obj) {
    if (obj[key] === value) {
      foundKey = key;
    }
  }
  return foundKey;
};

module.exports = findKeyByValue;