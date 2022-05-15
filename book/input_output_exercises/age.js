let rlSync = require('readline-sync');

let age = Number(rlSync.question('How old are you? '));

console.log(`You are ${age} years old.`);

let years = 10;
console.log(`In ${years} years, you will be ${age + years} years old.`);

years = 20;
console.log(`In ${years} years, you will be ${age + years} years old.`);

years = 30;
console.log(`In ${years} years, you will be ${age + years} years old.`);

years = 40;
console.log(`In ${years} years, you will be ${age + years} years old.`);
