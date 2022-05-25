var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// This code logs "This is global" to the console.

// The variable initialized to the global scope on  line 1 is accessible within the function.
// JS first looks in the local scope for a `myVar` variable, and not finding one, then moves
// to the outer scope, finding the variable initialized on line 1.
// Since the value of that variable is "This is global", that is what is output when the variable
// is passed to `log` on line 4 after `someFunction` is invoked on line 7.