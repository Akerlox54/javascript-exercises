const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce((init, curr) => init + curr ,0);
};

const multiply = function(arr) {
  return arr.reduce((init, curr) => init * curr, 1);
};

const power = function(a, b) {
  return Math.pow(a, b); 
};

const factorial = function(num) {
	let result = 1;
  if (num == 0) result = 1;
  else if (num !== 0) {
    for (let i = num; i > 0; i--) {
      result *= i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
