let rlSync = require('readline-sync');

let phrase = rlSync.question("Please enter a phrase: ");

console.log(`There are ${phrase.length} characters in "${phrase}".`);

let stripped_phrase = phrase.replace(/\s/g, '');
console.log(`(${stripped_phrase.length} characters excluding spaces)`);
