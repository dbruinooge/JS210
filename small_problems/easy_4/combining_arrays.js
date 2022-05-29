function union(arr1, arr2) {
  let result = [];
  
  [arr1, arr2].forEach(array => {
    array.forEach(element => {
      if (result.includes(element)) {
        return;
      }
      result.push(element);
    });
  });
  
  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
