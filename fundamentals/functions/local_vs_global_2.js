var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// This code will log "This is local" to the console. The `myVar` variable initialized on line 1 has global scope,
// while that initialized on line 4 has scope local to the `someFunction` function.  Both variables can be accessed
// from within the function, but on line 4 the declaration of a local variable with the same name shadows the
// variable declared on line 1. Therefore line 5 logs "This is local".