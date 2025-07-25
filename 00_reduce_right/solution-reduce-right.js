/* eslint-disable no-unused-vars, no-prototype-builtins */
function reduceRight(array, initialValue, combine) {
  let result = initialValue;
  for (let i = array.length - 1; i >= 0; i--) {
    result = combine(result, array[i]);
  }
  return result;
}
