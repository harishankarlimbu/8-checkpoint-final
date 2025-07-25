/* eslint-disable no-unused-vars, no-prototype-builtins */
function alternate(func) {
  let count = 0;
  return function () {
    if (count % 2 === 0) {
      count++;
      return func();
    } else {
      count++;
      return 0;
    }
  };
}
function twice(func) {
  let count = 0;
  return function () {
    if (count < 2) {
      count++;
      return func();
    } else if (count >= 2) {
      return 0;
    } else {
      return undefined;
    }
  };
}
