// const rlSync = require('readline-sync');

// let numbers = [];

// numbers.push(rlSync.question('Enter the 1st number: '));
// numbers.push(rlSync.question('Enter the 2nd number: '));
// numbers.push(rlSync.question('Enter the 3rd number: '));
// numbers.push(rlSync.question('Enter the 4th number: '));
// numbers.push(rlSync.question('Enter the 5th number: '));

// let number = rlSync.question('Enter the last number: ');
// let appears = (numbers.includes(number)) ? 'appears' : 'does not appear';

// console.log(`The number ${number} ${appears} in [${numbers.join(', ')}].`);


// Further exploration

const rlSync = require('readline-sync');

let numbers = [];

numbers.push(rlSync.question('Enter the 1st number: '));
numbers.push(rlSync.question('Enter the 2nd number: '));
numbers.push(rlSync.question('Enter the 3rd number: '));
numbers.push(rlSync.question('Enter the 4th number: '));
numbers.push(rlSync.question('Enter the 5th number: '));

if (numbers.some(number => number > 23)) {
  console.log('At least one of the numbers is greater than 23.');
} else {
  console.log('None of the numbers are greater than 23.');
}

