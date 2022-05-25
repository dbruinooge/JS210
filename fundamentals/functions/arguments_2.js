let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// This logs 7, for the same reason as the previous question. This example also demonstrates
// variable shadowing; since the local variable on line 4 shares the same name with the global scoped variable on line 1,
// the line 1 variable is not available within the function.