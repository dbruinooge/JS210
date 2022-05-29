const rlSync = require('readline-sync');

const currentAge = rlSync.question('What is your age? ');
const retirementAge = rlSync.question('At what age would you like to retire? ');

const currentYear = new Date().getFullYear();
const yearsToRetirement = retirementAge - currentAge;
const retirementYear= currentYear + yearsToRetirement;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsToRetirement} years of work to go!`);
