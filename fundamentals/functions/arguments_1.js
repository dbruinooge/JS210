let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// This logs 7 to the console. When `myValue` is invoked on line 7 and passed `a`
// as an argument, the value of `a` becomes available within the function as a new local variable `b`.
// Since `a` is assigned to a primitive value, the reassignment of `b` on line 4 does not change the value of `a`,
// which remains 7, and that is what is logged by line 8.