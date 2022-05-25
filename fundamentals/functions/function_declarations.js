logValue();

function logValue() {
  console.log('Hello, world!');
}

// This logs 'Hello, world.'  Before execution, the function declaration is hoisted
// to the top of the code and we can imagine that it precedes the invocation of the function
// on line 1. With function declarations, everything is hoisted, including the body. This means
// that a function can be executed before it is declared.

// Further exploration:

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

// "string" is logged on the last line. The hoisted equivalent is:

function logValue() {
  console.log('Hello, world!');
}

var logValue;

logValue = 'foo';

console.log(typeof logValue);

// When hoisting occurs, function declarations precede variable declarations. Since the `logValue` function
// is declared first, and results in both a function named `logValue` and a variable by the same name
// that points to it, the `var logValue` declaration that follows is redundant, since a variable by that name
// was already declared. What is left is the assignment `logValue = 'foo'`, which reassigns `logValue` to a string.
// Therefore, "string" is logged by the last line.