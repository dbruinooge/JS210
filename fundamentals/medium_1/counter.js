// What will the following code snippets log?

var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

// The total value is 15
// Is this because counter without parentheses isn't a function call, so 
// JS retrieves the value of the counter variable?
// Or because the function declaration is hoisted above the variable declaration
// and thus the variable declaration overwrites it?
// The above is wrong. It's true that the function declaration is hoisted above
// the variable declaration. This means that the variable declaration is ignored
// and this is just reassignment to the number 5.

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;

// The total value is NaN
// the counter function returns undefined since there's no explicit return value
// undefined * 5 => NaN
// Here console.log is executed before the assignment of counter to 5; that assignment
// is not hoisted because there is no variable declaration

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// Basically same as the first example. Function declaration is hoisted to the top, 
// counter is reassigned, output is 'The total value is 15'

let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// Same as above? Not sure how using `let` changes the result. counter is already
// declared so this is just reassignment to 5.
// Wrong. You can't declare a variable multiple times when one of those declarations
// uses let or const. Since snippet 4 uses let, it raises a SyntaxError.