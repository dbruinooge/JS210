let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.reduce(
    function(previous_arr, element) {
    if (element.length % 2 === 1) {
      previous_arr.push(element.length);
    }
    return previous_arr
  },
  []
  )
}


console.log(oddLengths(arr)); // => [1, 5, 3]