function shift(array) {
  let first = array[0];

  for (let index = 0; index < array.length - 1; index += 1) {
    array[index] = array[index + 1];
  }
  if (array.length > 0) {
    array.length -= 1;
  }

  return first;
}

function unshift(array, ...values) {
  let originalArray = array.slice();
  array.length = values.length;

  for (let index = 0; index < values.length; index += 1) {
    array[index] = values[index];
  }

  for (let index = 0; index < originalArray.length; index += 1) {
    array[array.length] = originalArray[index];
  }

  return array.length;
}

// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]