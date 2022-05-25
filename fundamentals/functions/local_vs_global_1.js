var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// This will log "This is global" to the console.
// The `myVar` variable declared on line 4 is local to the `someFunction` function.
// Therefore, when `myVar` is accessed from the global scope on line 8, it will return
// the value of the globally scoped `myVar` variable which is "This is global".