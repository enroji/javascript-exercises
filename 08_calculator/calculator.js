const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (array) {
  return array.reduce((acc, curr) => acc * curr);
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (number) {
  if (number === 0 || number === 1) return 1;
  let factorial = number;
  while (number > 1) {
    number--;
    factorial = factorial * number;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
