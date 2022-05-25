function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

console.log(productOfSums([1, 2, 3], [1, 2, 3]));

// Will it produce the expected result? Why or why not?

// No, because sum is declared but not explicitly initialized to a value.
// This means that JS initializes `sum` to `undefined`.
// Therefore sum += numbers[i] returns NaN on each iteration.
// Another problem is that `total` doesn't have an explicit `return` statement,
// so the function returns `undefined` implicitly.
