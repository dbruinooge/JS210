function concat(array1, ...values) {
  let result = array1.slice();

  values.forEach(value => {
    if (Array.isArray(value)) {
      for (let index = 0; index < value.length; index += 1) {
        result.push(value[index]);
      }
    } else {
      result.push(value);
    }
  });

  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
