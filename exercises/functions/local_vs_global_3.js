var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// This code logs "This is local" to the console.
// The variable `myVar` declared on line 1 can be accessed and modified within the `someFunction` function.
// When that function is invoked on line 7, `myVar` is reassigned to "This is local".
// That is thus what is logged on line 8.