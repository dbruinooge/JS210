let rlSync = require('readline-sync');

let integer1 = Number(rlSync.question("==> Enter the first number:\n"));
let integer2 = Number(rlSync.question("==> Enter the second number:\n"));

let sum = integer1 + integer2;
let difference = integer1 - integer2;
let product = integer1 * integer2;
let quotient = integer1 / integer2;
let remainder = integer1 % integer2;
let power = integer1 ** integer2;

console.log(`==> ${integer1} + ${integer2} = ${sum}`);
console.log(`==> ${integer1} - ${integer2} = ${difference}`);
console.log(`==> ${integer1} * ${integer2} = ${product}`);
console.log(`==> ${integer1} / ${integer2} = ${quotient}`);
console.log(`==> ${integer1} % ${integer2} = ${remainder}`);
console.log(`==> ${integer1} ** ${integer2} = ${power}`);
