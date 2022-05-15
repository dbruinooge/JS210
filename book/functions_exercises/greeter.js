let rlSync = require('readline-sync');

let person = getName();

function getName() {
  let first_name = rlSync.question("What's your first name? ");
  let last_name = rlSync.question("What's your last name? ");
  return first_name + " " + last_name
}

console.log(`Good Morning, ${person}.`);
console.log(`Good Afternoon, ${person}.`);
console.log(`Good Evening, ${person}.`);