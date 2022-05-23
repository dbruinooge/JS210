function missing(arr) {
  let first = arr[0];
  let last = arr[arr.length - 1];
  let result = [];

  for (let number = first + 1; number < last; number += 1) {
    if (!arr.includes(number)) {
      result.push(number);
    }
  }

  return result;
}


console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []