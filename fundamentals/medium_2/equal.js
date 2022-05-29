const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);    // false -- expected: true

// The original code did not log the expected result because person and otherPerson
// referenced different objects that happened to have the same property name and value.
// when the `otherPerson` constant was initialized on line 2 to an object literal, it created a new object.
