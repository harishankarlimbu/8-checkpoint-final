/* eslint-disable no-unused-vars, no-prototype-builtins */
function keyAdder(obj) {
  let total = 0;
  for (let key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      total += this[key];
    }
  }
  return total;
}
