const rlSync = require('readline-sync');

let bill = parseFloat(rlSync.question('What is the bill? '), 10);
let tipPercentage = parseFloat(rlSync.question('What is the tip percentage? '), 10);

let tip = bill * tipPercentage / 100;
let total = bill + tip;

console.log(`\nThe tip is \$${tip.toFixed(2)}`);
console.log(`The total is \$${total.toFixed(2)}`);
