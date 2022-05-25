const rlSync = require('readline-sync');

let number = rlSync.question('Please enter an integer greater than zero: ');
number = parseInt(number, 10);

const CALCULATION_PROMPT = 'Enter "s" to compute the sum, or "p" to compute the product. ';
let calculationChoice;

while (true) {
  calculationChoice = rlSync.question(CALCULATION_PROMPT);
  if (['s', 'p'].includes(calculationChoice.toLowerCase())) {
    break;
  }
  console.log('Invalid input.');
}

let calculation = calculationChoice === 's' ? 'sum' : 'product';
let calculationResult = calculation === 'sum' ? sum(number) : product(number);

function sum(number) {
  let result = 0;
  for (let index = 1; index <= number; index += 1) {
    result += index;
  }
  return result;
}

function product(number) {
  let result = 1;
  for (let index = 1; index <= number; index += 1) {
    result *= index;
  }
  return result;
}

let resultMessage = `The ${calculation} of the integers between 1 and ` +
                    `${number} is ${calculationResult}.`;

console.log(resultMessage);
