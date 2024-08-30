const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let ans = arr.reduce((total, current) => total + current, 0);
  return ans;
};

const multiply = function (arr) {
  return arr.reduce((total, current) => {
    return total * current;
  }, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let ans = 1;
  while (a > 0) {
    ans *= a;
    a -= 1;
  }
  return ans;
};

// Do not edit below this line
export default {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
