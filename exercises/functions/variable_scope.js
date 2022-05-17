function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// This code logs "This is global" to the console.

// After `someFunction` is invoked on line 5, a new global variable is initialized
// on line 2. Although this looks like simple assignment syntax, JS binds `myVar` to be a
// "property" of the global object (sort of like initializing myVar as a global variable)
// because it does not find an existing variable with that name within the local scope or
// outer scope.