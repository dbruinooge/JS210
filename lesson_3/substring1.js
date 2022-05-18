function substr(string, start, length) {
  let result = '';
  if (start < 0) start += string.length;
  if (length > string.length - start) length = string.length - start;

  for (let index = start; index < start + length; index++) {
    result += string[index];
  }
  return result;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""