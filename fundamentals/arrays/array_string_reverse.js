function reverse(inputForReversal) {
  let result;
  if (typeof inputForReversal === 'string') {
    result = '';
    let chars = inputForReversal.split('');
    for (let index = chars.length - 1; index >= 0; index -= 1) {
      result += chars[index];
    }
  } else {
    result = [];
    for (let index = inputForReversal.length - 1; index >= 0; index -= 1) {
      result.push(inputForReversal[index]);
    }
  }
  return result;
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]