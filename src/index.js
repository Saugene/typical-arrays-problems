
exports.min = function min (array) {
  if (!array || array.length == 0) return 0;
  let l = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < l) l = array[i];
  }
  return l;
}

exports.max = function max (array) {
  if (!array || array.length == 0) return 0;
  let l = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > l) l = array[i];
  }
  return l;
}

exports.avg = function avg (array) {
  if (!array || array.length == 0) return 0;
  let s = 0;
  for (let i = 0; i < array.length; i++) {
    s += array[i];
  }
  s /= array.length;
  return s;
}
