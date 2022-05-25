console.log(a);

var a = 1;

// This will log `undefined`.

// The declaration of the variable on line 3 - but not the initialization to `1` -
// is hoisted to the top of the code during the "creation" phase.
// The assignment remains on the last line, with `console.log(a);` coming in the middle.
// Therefore, when `a` is accessed by `console.log`, it has been declared but not initialized to
// a value. Such variables in JavaScript return `undefined` and that is what is logged.