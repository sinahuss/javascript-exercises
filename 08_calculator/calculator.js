const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const ans = array.reduce((total, num) => total + num, 0);
  return ans;
};

const multiply = function(array) {
  const ans = array.reduce((total, num) => total * num, 1);
  return ans;
};

const power = function(a, b) {
  const temp = a;
	for(i = 1; i < b; i++) {
    a *= temp;
  }
  return a;
};

const factorial = function(num) {
	if (num == 0) {
    return 1;
  }
  return num * factorial(num-1);
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
