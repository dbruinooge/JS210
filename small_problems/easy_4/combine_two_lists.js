function interleave(arr1, arr2) {
  let result = [];
  
  for (let index = 0; index < arr1.length; index += 1) {
    result.push(arr1[index]);
    result.push(arr2[index]);
  }
  
  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
