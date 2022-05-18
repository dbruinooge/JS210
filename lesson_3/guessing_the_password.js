const rlSync = require('readline-sync');

const PASSWORD = 'letmein';

function getPassword() {
  return rlSync.question('What is the password: ');
}

function logIn() {
  for (let attempts = 1; attempts <= 3; attempts++) {
    if (getPassword() === PASSWORD) return 'You have successfully logged in.';
  }
  return 'You have been denied access.';
}

console.log(logIn());