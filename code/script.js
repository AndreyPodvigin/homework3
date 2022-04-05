let result;
let firstOperant = Number(prompt('Please enter the first digit here:'));
while (!firstOperant) {
  firstOperant = Number(prompt('Entered value is not a number. Please make sure to enter a digit.'));
}

let operator = prompt('Please choose and enter on of the following operators: *, /, +, -.');
while (!(operator === '*' || operator === '/' || operator === '+' || operator === '-')) {
  operator = prompt('Unfortunately, there is not such an operation available. Please choose one of the following only: *, /, +, -.')
}

let secondOperant = Number(prompt('Please enter the second digit here:'));
while (!secondOperant) {
  secondOperant = Number(prompt('Entered value is not a number. Please make sure to enter a digit.'));
}

if (operator === '*') {
  result = firstOperant * secondOperant;
  alert(`Your result is ${result}!`)
} else if (operator === '/') {
  result = firstOperant / secondOperant;
  alert(`Your result is ${result}!`)
} else if (operator === '+') {
  result = firstOperant + secondOperant;
  alert(`Your result is ${result}!`)
} else if (operator === '-') {
  result = firstOperant - secondOperant;
  alert(`Your result is ${result}!`)
};