let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// This logs [1, 2, 10].

// Although the individual elements of the array are primitives and thus immutable,
// the array itself is mutable and is mutated by the reassignment of the element on line 4. When the array is passed
// to the function, a local variable `b` is initialized to the same array that `a` points to. Therefore, this change to the
// array is reflected when the array is logged by line 8.