let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  let mappedArray = arr.map(element => element.length);
  return mappedArray.filter(number => number % 2 !== 0);
}
console.log(oddLengths(arr)); // => [1, 5, 3]