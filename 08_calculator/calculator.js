const add = function() {
  let result = arguments[0]
	for (let i = 1; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

const subtract = function() {
  let result = arguments[0]
	for (let i = 1; i < arguments.length; i++) {
    result -= arguments[i];
  }
  return result;
};

const sum = function() {
  let result = 0;
  if (arguments.length > 0) {
    for (let i = 0; i < arguments[0].length; i++) {
      result += arguments[0][i];
    }
  }
	return result;
};

const multiply = function() {
  if (arguments.length > 0) {
    let result = arguments[0][0];
    for (let i = 1; i < arguments[0].length; i++) {
      result *= arguments[0][i];
    }
    return result;
  }
  else {
    return 0;
  }
};

const power = function() {
	const number = arguments[0];
  let result = arguments[0];
  for (let i = 1; i < arguments[1]; i++) {
    result *= number;
  }
  return result;
};

const factorial = function() {
	const number = arguments[0]
  let result = arguments[0]

  if (arguments[0] == 0) {
    return 1;
  }

  for (let i = arguments[0] - 1; 0 < i; i--) {
    result *= (number - i);
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
