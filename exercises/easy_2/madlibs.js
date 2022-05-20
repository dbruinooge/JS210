const rlSync = require('readline-sync');

const noun = rlSync.question('Enter a noun: ');
const verb = rlSync.question('Enter a verb: ');
const adjective = rlSync.question('Enter a adjective: ');
const adverb = rlSync.question('Enter a adverb: ');

const madlib = `Do you ${verb} your ${adjective} ${noun} ${adverb}? ` +
             `That's hilarious!`;

console.log(madlib);