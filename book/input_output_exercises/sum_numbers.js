let rlSync = require('readline-sync');

let first = rlSync.question('Enter the first number: ');
let second = rlSync.question('Enter the second number: ');
let sum = Number(first) + Number(second);

console.log(`The sum of ${first} and ${second} is ${sum}.`)