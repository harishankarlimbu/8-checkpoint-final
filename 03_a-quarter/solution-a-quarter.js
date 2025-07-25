/* eslint-disable no-unused-vars, no-prototype-builtins */
function aQuarter(func) {
  let count = 0;
  return function (...args) {
    count++;
    if(count%4!==0){
        return 'something went wrong :/';
    }
    return func(...args);
  };
}
