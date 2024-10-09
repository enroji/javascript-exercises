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
  return Math.power(base, exponent);
};

const factorial = function (number) {
  let factorial;
  while (number > 0) {
    factorial += number;
    number--;
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
