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

module.exports = middle;

